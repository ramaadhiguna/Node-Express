import express from 'express';
import connectDB from './config/database';
import userRouter from './routers/user';
import commentRouter from './routers/comment';
import postRouter from './routers/post';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
// connectDB();

const app = express();
app.use(express.json);
app.use(cors());
// app.use('/user', userRouter);
// app.use('/comment', commentRouter);
// app.use('/post', postRouter);

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(3000, () =>  {
  console.log('Server started on port 3000...');
});
