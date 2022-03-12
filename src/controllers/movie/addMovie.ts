import error from 'http-errors'
import express from 'express'

import userDao from '../../dao/user-dao'
import { User } from 'src/model/User'
import IUser from 'src/interface/User.interface'

const { NotFound, BadRequest, Conflict } = error

export const addMovie: express.RequestHandler = async (
  req: express.Request,
  res,
) => {
  const { movieId } = req.body
  const { _id } = req.user
  if (!movieId) {
    throw new BadRequest('wrong id')
  }
  const user = await userDao.findUserById(_id as string)
  if (!user) {
    throw new NotFound('Not found')
  }
  const { movies } = user
  const dup = movies.find(id => id === movieId)
  if (dup) {
    throw new Conflict('movie already in library')
  }
  const result = await userDao.findUserByIdAndUpdate(
    _id as string,
    {
      movies: [...movies, movieId],
    },
    { new: true },
  )
  res.status(201).json({ message: 'success', newMovies: result?.movies })
}
