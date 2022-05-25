// import * as _ from '../@types/index'
import express from 'express'
import { Unauthorized, HttpError } from 'http-errors'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { User } from '../model/User'

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

    const { id } = jwt.verify(token, SECRET_KEY as string) as jwt.JwtPayload
    const user = await User.findById({ _id: id })

    if (!user || !user.token) {
      throw new Unauthorized('Not authorized')
    }

    req.user = user
    next()
  } catch (err: HttpError | jwt.VerifyErrors | unknown) {
    if ((err as jwt.VerifyErrors).message === 'invalid signature')
      (err as HttpError).status = 401

    next(err)
  }
}
