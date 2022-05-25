import express from 'express'

import { User } from '../../model/User'

export const logout: express.RequestHandler = async (req, res) => {
  const { _id } = req.user

  await User.findByIdAndUpdate({ _id }, { token: null })

  res.status(204).json()
}
