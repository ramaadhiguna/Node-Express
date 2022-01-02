import { model, Schema} from 'mongoose';
import { IPost } from './interface';

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

const Post = model<IPost>('Post', postSchema);
module.exports = Post;