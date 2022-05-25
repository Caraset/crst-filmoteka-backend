import express from 'express'

type Wrapper = (ctrl: express.RequestHandler) => express.RequestHandler

export const ctrlWrapper: Wrapper = ctrl => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
