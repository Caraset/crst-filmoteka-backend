import express from 'express'

export const current: express.RequestHandler = (req, res) => {
  const { _id, email, verify, moviesWatched, moviesQueue } = req.user
  res.status(200).json({ id: _id, email, verify, moviesWatched, moviesQueue })
}
