import express from 'express'
import { Types } from 'mongoose'
import IUser from 'src/interface/User.interface'
import userDao from '../../dao/user-dao'

export const logout: express.RequestHandler = async (req, res) => {
  const { _id } = req.user

  await userDao.findUserByIdAndUpdate(
    _id as Types.ObjectId,
    { token: null } as IUser,
  )

  res.status(204).json()
}
