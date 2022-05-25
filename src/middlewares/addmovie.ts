import express from 'express'
import { BadRequest } from 'http-errors'
import { Types } from 'mongoose'
import { Movie } from '../model/Movie'
import { MovieI, UserI } from 'src/types'

interface MovieWithDbIdI extends MovieI {
  _id: Types.ObjectId
}

export const addMovie: express.RequestHandler = async (req, res, next) => {
  const { movie } = req.body

  if (!movie) {
    throw new BadRequest('wrong movie format')
  }

  const savedMovie = await Movie.findOne({ id: movie.id })

  if (savedMovie) {
    req.movie = savedMovie
  } else {
    // const createdMovie = <MovieWithDbIdI>(<unknown>await Movie.create(movie))
    const createdMovie = await Movie.create(movie)
    req.movie = createdMovie
  }

  next()
}
