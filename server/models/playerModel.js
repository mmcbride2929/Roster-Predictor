import mongoose from 'mongoose'

const Player = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  number: { type: Number, required: true },
  team: { type: String, required: true },
})

export default mongoose.model('players', Player)
