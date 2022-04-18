import { model, Schema} from 'mongoose';
import { IPost } from '../types/interface';

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  }
}, {timestamps:true});

export const Post = model<IPost>('Post', postSchema);
