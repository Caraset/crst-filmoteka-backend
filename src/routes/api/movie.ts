import { Router } from 'express'
// import multer from 'multer'
import { movieCtrl } from '../../controllers/index'
// import path from 'path'

import {
  validation,
  ctrlWrapper,
  auth,
  addMovie,
} from '../../middlewares/index'
import { userSchema, emailSchema } from '../../schemas/user'

const router = Router()

// router.post('/save', auth, addMovie, ctrlWrapper(movieCtrl.saveMovie))
router.post('/save', auth, addMovie, ctrlWrapper(movieCtrl.saveMovie))
router.delete('/delete', auth, ctrlWrapper(movieCtrl.removeMovie))
router.get('/', auth, ctrlWrapper(movieCtrl.getMovies))
router.get('/watched', auth, ctrlWrapper(movieCtrl.getWatchedMovies))
router.get('/queue', auth, ctrlWrapper(movieCtrl.getQueueMovies))
// router.post('/signup', validation(userSchema), ctrlWrapper(userCrtl.signUp))
// router.post('/login', validation(userSchema), ctrlWrapper(userCrtl.login))
// router.get('/logout', auth, ctrlWrapper(userCrtl.logout))
// router.get('/current', auth, ctrlWrapper(userCrtl.current))
// router.get('/verify/:verificationToken', ctrlWrapper(userCrtl.verify))

export default router
