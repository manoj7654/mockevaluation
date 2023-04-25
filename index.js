        // for express server
const express=require("express");
const app=express()


            //   for connection
const { connection } = require("./config/db");


    //  for dotenv
require("dotenv").config()

// //   routes importing

const {userRouter}=require("./routes/userRoutes")
const {flightRouter}=require("./routes/fligthRoutes")
const {bookingRouter}=require("./routes/bookingRoutes")

// //   middleware
app.use(express.json())



    //   cookiParser
    const cookieParser=require("cookie-parser")
app.use(cookieParser())



app.use("/api",userRouter)
app.use("/api",flightRouter)
app.use("/api",bookingRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }

    console.log(`Server is running on port no ${process.env.port}`)
})