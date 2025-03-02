import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://PRAVENKUMAR:pkmongodb@cluster0.m6oyk.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}