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

//routes
app.get('/', (req, res) => {
  res.send('Hello-Motto')
})

// route controllers
import rosterRouter from './routes/rosterRouter.js'
app.use('/api/v1/roster', rosterRouter)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
