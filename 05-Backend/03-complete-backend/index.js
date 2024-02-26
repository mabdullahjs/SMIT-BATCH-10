const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { getStudent, addStudent, getSingleStudent, deleteStudent, updateStudent } = require('./controllers/studentcontroller');
require('dotenv').config()

const port = process.env.PORT

//MIDDLEWARE
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/v1/students', getStudent);
app.get('/api/v1/students/:id', getSingleStudent);
app.post('/api/v1/students', addStudent);
app.delete('/api/v1/students/:id', deleteStudent);
app.put('/api/v1/students/:id', updateStudent);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.log(error);
  }
}
connectDB().then(() => {
  app.listen(process.env.PORT)
}).catch((err) => {
  console.log(err)
})