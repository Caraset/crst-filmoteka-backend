import { signUp } from './users/signup'
import { login } from './users/login'
import { verify } from './users/verify'
import { current } from './users/current'
import { logout } from './users/logout'

import { saveMovie } from './movie/saveMovie'
import { removeMovie } from './movie/removeMovie'
import { getMovies } from './movie/getMovies'
import { getWatchedMovies } from './movie/getWatchedMovies'
import { getQueueMovies } from './movie/getQeueuMovies'

// export default { signUp, login, verify, current, logout }

export const userCtrl = { signUp, login, verify, current, logout }
export const movieCtrl = {
  saveMovie,
  removeMovie,
  getMovies,
  getWatchedMovies,
  getQueueMovies,
}
