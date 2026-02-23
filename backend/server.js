const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model('User', { name: String });

app.get('/', (req,res)=> res.send("Backend running"));

app.post('/user', async (req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/users', async (req,res)=>{
  const users = await User.find();
  res.send(users);
});

app.listen(5000, ()=>console.log("Server started"));