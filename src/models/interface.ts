import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string; 
    email: string;
    password: string;
};

export interface IComment extends Document {
    userId: Schema.Types.ObjectId; 
    comment: string;
    postId: Schema.Types.ObjectId;
};

export interface IPost extends Document {
    title: string; 
    description: string;
    imageUrl: string;
};