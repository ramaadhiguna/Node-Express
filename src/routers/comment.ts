import { Router } from 'express';
import { IComment } from '../types/interface';
import  { Comment }  from '../models/comment'
const commentRouter = Router();

commentRouter.route('/').get(async (req,res) =>{
    Comment.find()
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

commentRouter.route('/:id').get(async (req,res) =>{
    Comment.findById(req.params.id)
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

commentRouter.route('/').post(async (req,res) =>{
    const newComment : IComment = new Comment(req.body);
    newComment.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

commentRouter.route('/:id').post(async (req,res) =>{
    const newComment : IComment = new Comment(req.body);
    newComment.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

commentRouter.route('/:id').delete(async (req,res) =>{
    Comment.deleteOne({_id: req.params.id})
    .then(result=>res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

export default commentRouter;
