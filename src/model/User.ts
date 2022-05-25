import mongoose from 'mongoose'
import { UserI } from '../types'

const { Schema, model } = mongoose

const userSchema = new Schema<UserI>(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    moviesQueue: {
      movies: {
        type: Array,
        default: [],
      },
      totalMovies: {
        type: Number,
        default: 0,
      },
    },
    moviesWatched: {
      movies: {
        type: Array,
        default: [],
      },
      totalMovies: {
        type: Number,
        default: 0,
      },
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: false },
)

export const User = model<UserI>('User', userSchema)
