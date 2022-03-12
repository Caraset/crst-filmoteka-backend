import mongoose from 'mongoose'
import IUser from '../interface/User.interface'

const { Schema, model } = mongoose

const userSchema = new Schema<IUser>(
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
    // movies: {
    //   type: Array,
    //   // enum: ['starter', 'pro', 'business'],
    //   default: [1],
    // },
    movies: Array,
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: false },
)

export const User = model<IUser>('User', userSchema)
