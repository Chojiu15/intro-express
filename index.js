import express from 'express'
import 'dotenv/config'
import movieRouter from './routes/movieRouter.js'

const app = express()

const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(movieRouter)



app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))