const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT

//MIDDLEWARE
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login' , (req , res)=>{
  res.send('Login user');
})

const connectDB = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.log(error);
  }
}
connectDB().then(()=>{
  app.listen(process.env.PORT)
}).catch((err)=>{
  console.log(err)
})