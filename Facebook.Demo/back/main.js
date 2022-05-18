const dotenv= require ("dotenv");
const express= require( "express");
const helmet = require( "helmet");
const mongoose= require( "mongoose");
const morgan = require( "morgan");
const user =require( './routes/user');
const auth =require( './routes/auth');
const posts =require( './routes/posts');


dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user",user);
app.use("/api/auth",auth);
app.use("/api/post",posts);


mongoose.connect(process.env.db, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("connect");
});

app.listen(7700, () => {
  console.log("backend server is running");
});
