const express= require("express")
const { createStudentInfo, getStudentsInfo, delateStudentData, updateStudentInfo, GetSingleStudentInfo } = require("../controllers/studentsController")
const app=express()
app.use(express())
const studentRouter=express.Router()

studentRouter.post("/create",createStudentInfo)
studentRouter.get("/getalldata",getStudentsInfo)
studentRouter.delete("/delate/:_id",delateStudentData)
studentRouter.get("/getsinglestudentinfo/:_id",GetSingleStudentInfo)
studentRouter.patch("/update/:_id",updateStudentInfo)

module.exports=studentRouter