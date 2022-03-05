import express from 'express'
import error from 'http-errors'
import userDao from '../../dao/user-dao'

const { NotFound } = error

export const verify: express.RequestHandler = async (req, res) => {
  const { verificationToken } = req.params
  const user = await userDao.findUserByVerificationToken({ verificationToken })

  if (!user) {
    throw new NotFound('User not found')
  }

  await userDao.findUserByIdAndUpdate(user._id as string, {
    verify: true,
    verificationToken: null,
  })

  res.status(200).json({ message: 'Verification successful' })
}
