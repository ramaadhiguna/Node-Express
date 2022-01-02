import express from 'express';
import connectDB from './config/database';
import router from './routes/user';
import * as dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(3000, () =>  {
  console.log('Server started on port 3000...');
});
