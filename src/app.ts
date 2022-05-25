import express, { json, NextFunction, Request, Response } from 'express'
import { HttpError } from 'http-errors'
import logger from 'morgan'
import cors from 'cors'

import { moviesRouter, usersRouter } from './routes'

import 'dotenv/config'

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(json())

app.use('/api/users', usersRouter)
app.use('/api/movie', moviesRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

/* eslint-disable-next-line */
app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

export default app
