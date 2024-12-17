import express from 'express'
import 'dotenv/config'
import {movies} from './data/moviesData.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.get('/movie/:id', (req, res) => {
    let {id} = req.params
    try{
        const movieByID = movies.find(movie => movie.id === parseInt(id))
        if(!movieByID){
            return res.status(400).json({message : 'Movie not found'})
        }
        return res.json(movieByID)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error 🔴'})
    }
})

app.post('/movies', (req, res) => {
    let {title, genre} = req.body
    const newMovie = {
        id : movies.length + 1,
        title,
        genre,
    }
    movies.push(newMovie)
    return res.json(movies)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))