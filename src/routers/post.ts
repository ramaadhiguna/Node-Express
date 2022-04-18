import { Router } from 'express';
import { IPost } from '../types/interface';
import  { Post }  from '../models/post'
const postRouter = Router();

postRouter.route('/').get(async (req,res) =>{
    Post.find()
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

postRouter.route('/:id').get(async (req,res) =>{
    Post.findById(req.params.id)
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

postRouter.route('/').post(async (req,res) =>{
    const newpost : IPost = new Post(req.body);
    newpost.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

postRouter.route('/:id').post(async (req,res) =>{
    const newpost : IPost = new Post(req.body);
    newpost.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

postRouter.route('/:id').delete(async (req,res) =>{
    Post.deleteOne({_id: req.params.id})
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

export default postRouter;
