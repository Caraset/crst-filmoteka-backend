import express from 'express'
import userDao from '../../dao/user-dao'

export const logout: express.RequestHandler = async (req, res) => {
  const { _id } = req.user

  await userDao.findUserByIdAndUpdate(_id as string, { token: null })

  res.status(204).json()
}
