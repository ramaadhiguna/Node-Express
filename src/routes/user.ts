import { Router } from 'express';
import { IUser } from '../models/interface';
import  { User }  from '../models/user'
const router = Router();

router.route('/').get(async (req,res) =>{
    User.find()
    .then(result=>res.json(result))
    .catch(err => res.status(400).json(err))
});

router.route('/add').post(async (req,res) =>{
    const newUser : IUser = new User(req.body);
    newUser.save()
    .then(()=> res.json("Yesh"))
    .catch(err => res.status(400).json(err))
});

export default router;
