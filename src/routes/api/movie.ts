import { Router } from 'express'
// import multer from 'multer'
import { movieCtrl } from '../../controllers/index'
// import path from 'path'

import { validation, ctrlWrapper, auth } from '../../middlewares/index'
import { userSchema, emailSchema } from '../../schemas/user'

const router = Router()

router.post('/addmovie', auth, ctrlWrapper(movieCtrl.addMovie))
// router.post('/signup', validation(userSchema), ctrlWrapper(userCrtl.signUp))
// router.post('/login', validation(userSchema), ctrlWrapper(userCrtl.login))
// router.get('/logout', auth, ctrlWrapper(userCrtl.logout))
// router.get('/current', auth, ctrlWrapper(userCrtl.current))
// router.get('/verify/:verificationToken', ctrlWrapper(userCrtl.verify))

export default router
