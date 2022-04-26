import error from 'http-errors'
import express from 'express'

import userDao from 'src/dao/user-dao'

const { NotFound } = error

export const removeMovie: express.RequestHandler = async (req, res) => {
  const { movieId } = req.body
  const { _id } = req.user

  if (!movieId) {
    throw new NotFound('Wrong id')
  }

  // const user = await userDao.findUserById(_id as string)

  // if (!user) {
  //   throw new NotFound('user not found')
  // }

  // const { movies } = user

  // const movieIndex = movies.findIndex(id => id === movieId)

  // if (movieIndex === -1) {
  //   throw new NotFound('movie not in library')
  // }

  // const newMovieArr = movies.slice().splice(movieIndex, 1)

  // const newUser = await userDao.findUserByIdAndUpdate(
  //   _id as string,
  //   { movies: newMovieArr },
  //   { new: true },
  // )

  // res.status(200).json({ message: 'success', movies: newUser?.movies })
}
