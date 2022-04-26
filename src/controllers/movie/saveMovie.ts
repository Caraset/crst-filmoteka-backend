import error from 'http-errors'
import express from 'express'
import { Types } from 'mongoose'

import userDao from '../../dao/user-dao'
import { User } from '../../model/User'
import { Movie } from '../../model/Movie'
import IUser from 'src/interface/User.interface'
import MovieI from 'src/interface/Movie.interface'

const { NotFound, BadRequest, Conflict } = error

export const saveMovie: express.RequestHandler = async (req, res, next) => {
  const { _id } = req.user
  const { movie } = req
  const { type } = req.body

  if (!movie) {
    throw new BadRequest('smth wrong with movie object')
  }

  let user: IUser | null = null

  if (type === 'watched') {
    user = await User.findOneAndUpdate(
      _id,
      {
        $addToSet: { moviesWatched: movie._id },
      },
      { new: true },
    )
  }

  if (type === 'queue') {
    user = await User.findByIdAndUpdate(
      _id,
      {
        $addToSet: { moviesQueue: movie._id },
      },
      { new: true },
    )
  }

  if (!user) {
    throw new NotFound('user not found')
  }

  res
    .status(201)
    .json({
      message: 'success',
      data: { watched: user.moviesWatched, queue: user.moviesQueue },
    })
}
