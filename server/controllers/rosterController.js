import Player from '../models/playerModel.js'

const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body)
    res.status(200).json({ player })
    console.log(`${player.name} has been added to the roster`)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed, there was an error' })
  }
}

export { createPlayer }
