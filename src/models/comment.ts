import { model, Schema} from 'mongoose';
import { IComment } from './interface';

const commentSchema = new Schema<IComment>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: String,
    required: true
  },
  postId: {
    type: Schema.Types.ObjectId, 
    ref: 'Post'
  }
}, { timestamps:true });

export const Comment = model<IComment>('Comment', commentSchema);
