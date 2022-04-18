import { Router } from 'express';
import { IUser } from '../types/interface';
import  { User }  from '../models/user'
const userRouter = Router();

userRouter.route('/').get(async (req,res) =>{
    User.find()
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

userRouter.route('/:id').get(async (req,res) =>{
    User.findById(req.params.id)
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

userRouter.route('/').post(async (req,res) =>{
    const newUser : IUser = new User(req.body);
    newUser.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

userRouter.route('/:id').post(async (req,res) =>{
    const newUser : IUser = new User(req.body);
    newUser.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

userRouter.route('/:id').delete(async (req,res) =>{
    User.deleteOne({_id: req.params.id})
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

export default userRouter;
