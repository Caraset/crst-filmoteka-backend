import { signUp } from './users/signup'
import { login } from './users/login'
import { current } from './users/current'
import { logout } from './users/logout'

import { saveMovie } from './movie/saveMovie'
import { removeMovie } from './movie/removeMovie'
import { getWatchedMovies } from './movie/getWatchedMovies'
import { getQueueMovies } from './movie/getQeueuMovies'

export const userCtrl = { signUp, login, current, logout }
export const movieCtrl = {
  saveMovie,
  removeMovie,
  getWatchedMovies,
  getQueueMovies,
}
