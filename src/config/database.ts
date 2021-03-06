import { connect } from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.ATLAS_URI || `mongodb+srv://ramaadhiguna:${encodeURIComponent('@693031Rzr729670')}@cluster0.gcdup.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  const conn = await connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected`);
};

export default connectDB;