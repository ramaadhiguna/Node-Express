import { connect } from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.ATLAS_URI || '';

const connectDB = async () => {
  const conn = await connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;