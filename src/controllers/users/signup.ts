import express from 'express'
import { Conflict } from 'http-errors'
import { genSaltSync, hashSync } from 'bcryptjs'
import { User } from '../../model/User'

import 'dotenv/config'

export const signUp: express.RequestHandler = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict('Email in use')
  }

  const hashedPassword = hashSync(password, genSaltSync(10))

  const newUser = await User.create({
    email,
    password: hashedPassword,
  })

  res.status(201).json({
    message: 'success',
    user: {
      email: newUser.email,
      moviesWatched: newUser.moviesWatched,
      moviesQueue: newUser.moviesQueue,
    },
  })
}
