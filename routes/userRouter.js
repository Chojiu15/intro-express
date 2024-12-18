import {Router} from 'express'
import User from '../models/User.js'

const userRouter = Router()

userRouter.get('/users', async (req, res) => {
    try{
        const users = await User.find()
        if(users.length < 1){
            return res.json({message : 'Users not found'})
        }
        return res.json(users)
    }
    catch(err){3
        console.log(err)
        return res.status(500).json({message : 'Internal server error'})
    }
})


export default userRouter