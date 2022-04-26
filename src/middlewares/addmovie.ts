import express from 'express'
import error from 'http-errors'
import { Types } from 'mongoose'
import MovieI from 'src/interface/Movie.interface'
import IUser from 'src/interface/User.interface'
import { Movie } from '../model/Movie'

const { BadRequest } = error

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
    const createdMovie = <MovieWithDbIdI>(<unknown>await Movie.create(movie))
    req.movie = createdMovie
  }

  next()
}
