import { Router } from 'express'
import { movieCtrl } from '../../controllers/index'

import { ctrlWrapper, auth, addMovie } from '../../middlewares/index'

const router = Router()

router.get('/watched', auth, ctrlWrapper(movieCtrl.getWatchedMovies))
router.get('/queue', auth, ctrlWrapper(movieCtrl.getQueueMovies))
router.post('/save', auth, addMovie, ctrlWrapper(movieCtrl.saveMovie))
router.delete('/delete', auth, ctrlWrapper(movieCtrl.removeMovie))

export default router
