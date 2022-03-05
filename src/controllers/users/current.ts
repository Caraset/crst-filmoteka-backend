import express from 'express'

export const current: express.RequestHandler = (req, res) => {
  const { email, subscription } = req.user
  res.status(200).json({ email, subscription })
}
