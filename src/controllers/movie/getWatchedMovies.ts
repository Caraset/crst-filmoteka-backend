import express from 'express'
import { NotFound } from 'http-errors'

import { Movie } from '../../model/Movie'

export const getWatchedMovies: express.RequestHandler = async (req, res) => {
  const { user } = req
  const { page = 1, limit = 10 } = req.query

  if (!user) {
    throw new NotFound('user not found')
  }

  const skip = (Number(page) - 1) * Number(limit)

  const results = await Movie.find(
    { id: user?.moviesWatched?.movies },
    { _id: 0 },
    { skip, limit: Number(limit) },
  )

  const total_pages = Math.ceil(user?.moviesWatched.totalMovies / Number(limit))
  const total_results = user?.moviesWatched.totalMovies

  res.status(200).json({ results, total_pages, total_results })
}
