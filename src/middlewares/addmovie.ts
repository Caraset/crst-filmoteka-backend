import express from 'express'
import { BadRequest } from 'http-errors'
import { Movie } from '../model/Movie'

export const addMovie: express.RequestHandler = async (req, res, next) => {
  const { movie } = req.body

  if (!movie) {
    throw new BadRequest('wrong movie format')
  }

  const savedMovie = await Movie.findOne({ id: movie.id })

  if (savedMovie) {
    req.movie = savedMovie
  } else {
    const createdMovie = await Movie.create(movie)
    req.movie = createdMovie
  }

  next()
}
