import express from 'express'
const router = express.Router()

import { createPlayer, getPlayers } from '../controllers/rosterController.js'

// posting and fetching players
router.route('/').post(createPlayer).get(getPlayers)

export default router
