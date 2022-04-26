import { Types } from 'mongoose'

export default interface IUser {
  _id?: Types.ObjectId
  password?: string
  email?: string
  moviesWatched?: Types.ObjectId[]
  moviesQueue?: Types.ObjectId[]
  token?: string | null
  verify?: boolean
  verificationToken?: string | null
}
