import * as path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

// initializing express
const app = express()
dotenv.config()

// importing database
import connectDB from './db/connectDB.js'

// middleware
app.use(express.json())

// cors
app.use(cors())

// route controllers
import rosterRouter from './routes/rosterRouter.js'
app.use('/api/v1/roster', rosterRouter)

// serve frontend
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production!'))
}

const PORT = process.env.PORT || 4000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => {
      console.log(`server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
