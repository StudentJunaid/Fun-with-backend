// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connect_DB from "./db";

dotenv.config({
    path: './env'
})

connect_DB()








// import mongoose from "mongoose";
// import { DB_NAME } from './constants';

// import express from 'express';
// const app = express;

// (async () =>{
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error", (error) =>{
//         console.log("ERROR ", error);
//         throw error
//      })

//      app.listen(process.env.PORT,() =>{
//         console.log(`App is listening on port, ${process.env.PORT}`);
//      })
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// })()



