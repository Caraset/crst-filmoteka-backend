import error from 'http-errors'
import express from 'express'
import { Types } from 'mongoose'

import { Movie } from '../../model/Movie'
import { User } from '../../model/User'

const { NotFound, BadRequest } = error

export const getQueueMovies: express.RequestHandler = async (req, res) => {
  const { user } = req
  const { page = 1, limit = 10 } = req.query

  if (!user) {
    throw new NotFound('user not found')
  }

  const skip = (Number(page) - 1) * Number(limit)

  const results = await Movie.find(
    { id: user?.moviesQueue?.movies },
    { _id: 0 },
    { skip, limit: Number(limit) },
  )

  const total_pages = Math.ceil(user?.moviesQueue.totalMovies / Number(limit))
  const total_results = user?.moviesQueue.totalMovies

  res.status(200).json({ results, total_pages, total_results })
}
