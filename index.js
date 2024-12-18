import express from 'express'
import 'dotenv/config'
import movieRouter from './routes/movieRouter.js'
import userRouter from './routes/userRouter.js'
import mongoose from 'mongoose'

const app = express()

const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(movieRouter, userRouter)


const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
const db = mongoose.connection
db.on('connected', () => {
    console.log('Connected to the database 🟢')
})
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))