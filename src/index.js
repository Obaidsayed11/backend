// require ('dotenv').config({path : './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"  // Ensure the correct .env file path
}); 

connectDB()
.then(() => {
    app.listeen(process.env.PORT || 8000, () => {
        console.log(` Server is running on port ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
    
})
















/*import express from 'express'

const app = express()


( async () => {
    try {
     await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
     app.on("error", (error) => {
         console.log("ERR", error);
         throw error
         
     })
    } catch (error) {
        console.error("ERROR", error)
        throw error
        
    }

    app.listen(process.env.PORT, () => {
console.log(``);

    })
})() */