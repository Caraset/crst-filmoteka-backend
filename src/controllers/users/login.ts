import express from 'express'
import { Unauthorized } from 'http-errors'
import { compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../../model/User'

const { SECRET_KEY = 'vdcvbxmcznvo' } = process.env

export const login: express.RequestHandler = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user || !compareSync(password, user.password as string)) {
    throw new Unauthorized('Email or password is wrong')
  }

  const payload = {
    id: user._id,
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

  user.token = token

  await User.findByIdAndUpdate(user._id, { token })

  res.status(200).json({
    message: 'success',
    token,
    user: {
      email: user.email,
      moviesWatched: user.moviesWatched,
      moviesQueue: user.moviesQueue,
    },
  })
}
