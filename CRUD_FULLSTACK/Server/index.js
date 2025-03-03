const express=require("express")
const dotenv=require("dotenv")
const connection = require("./config/server")
const studentRouter = require("./routes/studentRoutes")
const app=express()
const cors=require("cors")
dotenv.config()
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type',
    credentials:true
}));
app.use(express.json())

app.use("/studentsinfo",studentRouter)
app.listen(process.env.PORT || 3000 ,async()=>{
    try {
        await connection
        console.log(`server is running port on ${process.env.PORT || 3000}`)
    } catch (error) {
        console.log(error)
    }
})  