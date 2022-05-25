import mongoose from 'mongoose'
import { MovieI } from '../types'

const { Schema, model } = mongoose

const movieSchema = new Schema<MovieI>(
  {
    poster_path: {
      type: String,
      default: 'no poster',
    },
    adult: {
      type: Boolean,
      default: true,
    },
    overview: {
      type: String,
      default: 'no overview',
    },
    release_date: {
      type: String,
      default: 'no release date',
    },
    genre_ids: Array,
    id: {
      type: Number,
      required: [true, 'id of movie required'],
    },
    original_title: {
      type: String,
      default: 'no original title',
    },
    original_language: {
      type: String,
      default: 'no original language',
    },
    title: {
      type: String,
      default: 'no title',
    },
    backdrop_path: {
      type: String,
      default: 'no backdrop path',
    },
    popularity: {
      type: Number,
      default: 0,
    },
    vote_count: {
      type: Number,
      default: 0,
    },
    video: {
      type: Boolean,
      default: false,
    },
    vote_average: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: false },
)

export const Movie = model('Movie', movieSchema)
