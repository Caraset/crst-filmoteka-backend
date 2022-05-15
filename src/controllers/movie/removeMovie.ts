import error from 'http-errors'
import express from 'express'
import { Types } from 'mongoose'

import userDao from 'src/dao/user-dao'
import { User } from '../../model/User'
import IUser from 'src/interface/User.interface'

const { NotFound } = error

export const removeMovie: express.RequestHandler = async (req, res) => {
  const { movieId, type } = req.body
  const { _id } = req.user

  if (!movieId) {
    throw new NotFound('Wrong id')
  }

  // const user = await userDao.findUserById(_id as Types.ObjectId)

  let user: IUser | null = null

  if (type === 'watched') {
    user = await User.findByIdAndUpdate(
      _id,
      {
        $pull: { moviesWatched: movieId },
      },
      { new: true },
    )
  }

  if (type === 'queue') {
    user = await User.findByIdAndUpdate(
      _id,
      {
        $pull: { moviesQueue: movieId },
      },
      { new: true },
    )
  }

  if (!user) {
    throw new NotFound('user not found')
  }

  res.status(200).json({
    message: 'success',
    data: { watched: user.moviesWatched, queue: user.moviesQueue },
  })

  // const { movies } = user

  // const movieIndex = movies.findIndex(id => id === movieId)

  // if (movieIndex === -1) {
  //   throw new NotFound('movie not in library')
  // }

  // const newMovieArr = movies.slice().splice(movieIndex, 1)

  // const newUser = await userDao.findUserByIdAndUpdate(
  //   _id as string,
  //   { movies: newMovieArr },
  //   { new: true },
  // )

  // res.status(200).json({ message: 'success', movies: newUser?.movies })
}
