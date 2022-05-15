import { signUp } from './users/signup'
import { login } from './users/login'
import { verify } from './users/verify'
import { current } from './users/current'
import { logout } from './users/logout'

import { saveMovie } from './movie/saveMovie'
import { removeMovie } from './movie/removeMovie'

// export default { signUp, login, verify, current, logout }

export const userCtrl = { signUp, login, verify, current, logout }
export const movieCtrl = { saveMovie, removeMovie }
