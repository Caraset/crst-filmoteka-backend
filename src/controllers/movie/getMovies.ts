import error from 'http-errors'
import express from 'express'
import { Types } from 'mongoose'

import { Movie } from '../../model/Movie'
import { User } from '../../model/User'

const { NotFound, BadRequest } = error

export const getMovies: express.RequestHandler = async (req, res) => {
  // const { _id } = req.user
  const { user } = req
  const { page = 1, limit = 20, type = 'watched' } = req.query

  if (!type) {
    throw new BadRequest('bad request')
  }

  // const user = await User.findById(_id)

  if (!user) {
    throw new NotFound('user not found')
  }

  const skip = (Number(page) - 1) * Number(limit)
  let results: null | number[] = null
  let total_pages = 0
  let total_results = 0

  if (type === 'watched') {
    results = await Movie.find(
      { id: user?.moviesWatched?.movies },
      { _id: 0 },
      { skip, limit: Number(limit) },
    )
    total_pages = Math.ceil(user.moviesWatched.totalMovies / Number(limit))
    total_results = user.moviesWatched.totalMovies
  }

  // const moviesWatched = await Movie.find(
  //   { id: user?.moviesWatched },
  //   { _id: 0 },
  //   { skip, limit: Number(limit) },
  // )

  // const moviesWatched = await Movie.find(
  //   { id: user?.moviesWatched?.movies },
  //   { _id: 0 },
  //   { skip, limit: Number(limit) },
  // )
  // const moviesQueue = await Movie.find(
  //   { id: user?.moviesQueue },
  //   { _id: 0 },
  //   { skip, limit: Number(limit) },
  // )

  res
    .status(200)
    // .json({ data: { moviesLibrary: { moviesWatched, moviesQueue } } })
    .json({ results, total_pages, total_results, page })
}
