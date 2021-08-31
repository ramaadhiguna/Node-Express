const mongoose = require('mongoose');
const url = ``; //URImu dek kene lol
const connectDB = async () => {
  const conn = await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB; 
