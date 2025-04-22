// const dotenv=require("dotenv")
const express=require("express")
const mongoose = require("mongoose")

// const connection = require("./config/server")
const studentRouter = require("./routes/studentRoutes")
const app=express()
const cors=require("cors")
require("dotenv").config();
app.use(cors());
app.use(express.json())

// app.use(cors({
//     origin:["http://localhost:5173","http://localhost:3000" , ],
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//     allowedHeaders: 'Content-Type',
//     credentials:true
// }));

// app.use(express.json())

app.use("/studentsinfo",studentRouter)
// PORT=8080;
// app.listen(PORT || 3000 ,async()=>{
//     try {
//         await connection
//         console.log(`server is running port on ${process.env.PORT || 3000}`)
//     } catch (error) {
//         console.log(error)
//     }
// })  




// const express = require("express")
// const mongoose = require("mongoose")
// const BookRouter = require("./routes/routes")
// // const app = express()
// const cors = require("cors");
// require("dotenv").config();

// app.use(cors());
// app.use(express.json())
// app.use("/books", BookRouter)

const connectToDb = async () => 
{
    try 
    {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db");
    }
    catch (error) 
    {
        console.log(error);
        // mamtapatil5252
        // f2wPK6qUygDJRln2
    }
}

connectToDb();

const PORT = 8080
app.listen(PORT, () => 
{
    console.log("Server running on PORT");
});