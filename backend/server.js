import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

 //creation of express server:
//app config
const app = express() //intialized app using express package
const port = 4000//defined port number where our server will be running

app.use(express.json())//using this middleware whenever we will get the request from frontend to backend taht will be parsed using this json
app.use(cors())//using this we can sccess the backend from frontend

//db connection
connectDB();//imported from config (db.js)

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.get("/",(req,res)=>{    //app.get() is a http method using which we can request the data from the server
res.send("API Working")
})
app.listen(port,()=>{       //to run the express server
    console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://PRAVENKUMAR:pkmongodb@cluster0.m6oyk.mongodb.net/?

    