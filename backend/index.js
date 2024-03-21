import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js"
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'

const app = express();

app.use(express.json())//midleware for parsing request body

//middleware for handling cors policy
//option 1: allow all orgins with default of cors(*) 
app.use(cors());

//option 2 : allow the custom orgins;
//app.use(cors({
  //origins:'http://localhost:3000',
  //methods:['GET','POST','DELETE','PUT'],
  //allowedHeaders:['Content-Type']
//}))
 

app.get("/", (request, response) => {
    console.log(request)
    return response.send("welcome");
});//get methodu incele


app.use('/books',booksRoute);


mongoose
  .connect(mongoDBURL)
  .then(()=>{
    console.log("app connected to database")
    app.listen(PORT, () => {
        console.log(`APP İS LİSTENİNG:${PORT}`);
    })

  })
  .catch((error)=>{
    console.log(error);
  })
