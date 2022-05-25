import express from 'express'
import { NotFound, BadRequest } from 'http-errors'

import { User } from '../../model/User'
import { UserI } from 'src/types'

export const saveMovie: express.RequestHandler = async (req, res) => {
  const { _id } = req.user
  const { movie } = req
  const { type } = req.body

  if (!movie) {
    throw new BadRequest('smth wrong with movie object')
  }

  let user: UserI | null = null

  if (type === 'watched') {
    user = await User.findOneAndUpdate(
      { _id },
      {
        $addToSet: { 'moviesWatched.movies': movie.id },
        $inc: { 'moviesWatched.totalMovies': 1 },
      },
      { new: true },
    )
  }

  if (type === 'queue') {
    user = await User.findByIdAndUpdate(
      { _id },
      {
        $addToSet: { 'moviesQueue.movies': movie.id },
        $inc: { 'moviesQueue.totalMovies': 1 },
      },
      { new: true },
    )
  }

  if (!user) {
    throw new NotFound('user not found')
  }

  res.status(201).json({
    message: 'success',
    data: { watched: user.moviesWatched, queue: user.moviesQueue },
  })
}
