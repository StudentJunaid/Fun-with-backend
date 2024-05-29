require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connect_DB from "./db";
import { app } from './app';

dotenv.config({
    path: './env'
})

connect_DB()
.then(() =>{
    app.on("error",(error) =>{
        console.log("ERROR ",error);
        throw error
    })
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`server is runing at Port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("DB connection ERROR !!! " , err);
})


// import mongoose from "mongoose";

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




