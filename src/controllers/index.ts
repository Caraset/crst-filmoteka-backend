import { signUp } from './users/signup'
import { login } from './users/login'
import { verify } from './users/verify'
import { current } from './users/current'
import { logout } from './users/logout'

import { addMovie } from './movie/addMovie'

// export default { signUp, login, verify, current, logout }

export const userCtrl = { signUp, login, verify, current, logout }
export const movieCtrl = { addMovie }
