import error from 'http-errors'
import express from 'express'

import { User } from '../../model/User'
import { UserI } from 'src/types'

const { NotFound } = error

export const removeMovie: express.RequestHandler = async (req, res) => {
  const { movieId, type } = req.body
  const { _id } = req.user

  if (!movieId) {
    throw new NotFound('Wrong id')
  }

  let user: UserI | null = null

  if (type === 'watched') {
    user = await User.findByIdAndUpdate(
      { _id },
      {
        $pull: { 'moviesWatched.movies': movieId },
        $inc: { 'moviesWatched.totalMovies': -1 },
      },
      { new: true },
    )
  }

  if (type === 'queue') {
    user = await User.findByIdAndUpdate(
      { _id },
      {
        $pull: { 'moviesQueue.movies': movieId },
        $inc: { 'moviesQueue.totalMovies': -1 },
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
}
