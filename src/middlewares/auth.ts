import * as _ from '../@types/index'
import express from 'express'
import error from 'http-errors'
import jwt from 'jsonwebtoken'
import userDao from '../dao/user-dao'
import 'dotenv/config'
import IUser from '../interface/User.interface'

const { Unauthorized, HttpError } = error
const { verify } = jwt
const { SECRET_KEY } = process.env

export const auth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  try {
    if (bearer !== 'Bearer') {
      throw new Unauthorized('Not authorized')
    }

    const { id } = verify(token, SECRET_KEY as string) as jwt.JwtPayload
    const user = await userDao.findUserById(id)

    if (!user || !user.token) {
      throw new Unauthorized('Not authorized')
    }

    req.user = user
    next()
  } catch (err: error.HttpError | jwt.VerifyErrors | unknown) {
    if ((err as jwt.VerifyErrors).message === 'invalid signature')
      (err as error.HttpError).status = 401

    next(err)
  }
}
