import { Router } from 'express'
// import multer from 'multer'
import { userCtrl } from '../../controllers/index'
// import path from 'path'

import { validation, ctrlWrapper, auth } from '../../middlewares/index'
// import { validation, ctrlWrapper } from '../../middlewares/index'
import { userSchema, emailSchema } from '../../schemas/user'

const router = Router()

// const uploadDir = path.resolve('./tmp')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir)
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
//   limits: {
//     fileSize: 2048,
//   },
// })

// const upload = multer({
//   storage: storage,
// })

router.post('/signup', validation(userSchema), ctrlWrapper(userCtrl.signUp))
router.post('/login', validation(userSchema), ctrlWrapper(userCtrl.login))
router.get('/logout', auth, ctrlWrapper(userCtrl.logout))
router.get('/current', auth, ctrlWrapper(userCtrl.current))
router.get('/verify/:verificationToken', ctrlWrapper(userCtrl.verify))
// router.post(
//   '/verify',
//   validation(emailSchema),
//   ctrlWrapper(ctrl.sendVerificationMail),
// )
// router.patch(
//   '/avatars',
//   auth,
//   upload.single('avatar'),
//   ctrlWrapper(ctrl.updateAvatar),
// )
// router.patch('/', auth, ctrlWrapper(ctrl.updateSubscription))

export default router
