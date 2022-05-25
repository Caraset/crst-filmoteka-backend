import { Types } from 'mongoose'

export interface MovieI {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface UserI {
  _id: Types.ObjectId
  password: string
  email: string
  moviesQueue: {
    movies: number[]
    totalMovies: number
  }
  moviesWatched: {
    movies: number[]
    totalMovies: number
  }
  token: string | null
  verify?: boolean
  verificationToken?: string | null
}
