import {Router} from 'express'
import { createPost, getAllPosts } from '../controllers/postController.js'
import { verifyToken } from '../middlewares/userValidation.js'



const postRouter = Router()


postRouter.get('/posts', verifyToken, getAllPosts )
postRouter.post('/post', createPost)

export default postRouter