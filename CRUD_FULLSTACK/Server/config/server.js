// const mongoose=require("mogoose");
const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://127.0.0.1:27017/STUDENT_INFORMATION")
module.exports=connection