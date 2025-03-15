//this file contains the logic to connect with the data base-> link is provided in await() that is link generated from mongo db atals to connect with its db
import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://PRAVENKUMAR:pkmongodb@cluster0.m6oyk.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}