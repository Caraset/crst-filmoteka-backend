import { Types } from 'mongoose'

export default interface IUser {
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
