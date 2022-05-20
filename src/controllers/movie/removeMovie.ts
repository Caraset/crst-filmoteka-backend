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
      { _id },
      {
        $pull: { 'moviesWatched.movies': movieId },
        // $pull: { 'moviesWatched.movies': { $in: movieId } },
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
