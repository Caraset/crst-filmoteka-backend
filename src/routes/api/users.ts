import { Router } from 'express'
import { userCtrl } from '../../controllers/index'

import { validation, ctrlWrapper, auth } from '../../middlewares/index'
import { userSchema } from '../../schemas/user'

const router = Router()

router.get('/logout', auth, ctrlWrapper(userCtrl.logout))
router.get('/current', auth, ctrlWrapper(userCtrl.current))
router.post('/signup', validation(userSchema), ctrlWrapper(userCtrl.signUp))
router.post('/login', validation(userSchema), ctrlWrapper(userCtrl.login))

export default router
