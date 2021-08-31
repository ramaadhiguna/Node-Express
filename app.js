const express = require('express');
const connectDB = require('./config/database');

connectDB();
const app = express();
app.use(express.json());
let router = require('./routes/router');
app.get('/', function (req, res) {
  res.send('hello world')
})
app.use('/', router);
app.listen(3000, () =>  {
  console.log('Server started on port 3000...');
});
