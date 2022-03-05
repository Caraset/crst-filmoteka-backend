import express from 'express'
import error from 'http-errors'
import joi from 'joi'

type Validation = (schema: joi.ObjectSchema) => express.RequestHandler

export const validation: Validation = schema => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body)
      next()
    } catch (err) {
      if (error.isHttpError(err)) {
        err.status = 400
        next(err)
      }
      next(err)
    }
  }
}
