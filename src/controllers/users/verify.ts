import express from 'express'
import error from 'http-errors'
import { Types } from 'mongoose'
import IUser from 'src/interface/User.interface'
import userDao from '../../dao/user-dao'

const { NotFound } = error

export const verify: express.RequestHandler = async (req, res) => {
  const { verificationToken } = req.params
  const user = await userDao.findUserByVerificationToken({ verificationToken })

  if (!user) {
    throw new NotFound('User not found')
  }

  await userDao.findUserByIdAndUpdate(
    user._id as Types.ObjectId,
    {
      verify: true,
      verificationToken: null,
    } as IUser,
  )

  res.status(200).json({ message: 'Verification successful' })
}
