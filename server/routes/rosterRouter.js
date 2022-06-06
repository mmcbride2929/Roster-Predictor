import express from 'express'
const router = express.Router()

import { createPlayer } from '../controllers/rosterController.js'

router.route('/').post(createPlayer)

export default router
