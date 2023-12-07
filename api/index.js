const express = require('express');
const app = express();
const PORT = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
main().then(console.log("Connected to database successfully")).catch(err => console.log(err));

app.use(express.json()); //parses incoming request to json
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute );
app.use('/api/movies', movieRoute );
app.use('/api/lists', listRoute );

app.listen(PORT, (err)=>{
  if(err)console.log(err);
    console.log(`Server is running on ${PORT}`);
})