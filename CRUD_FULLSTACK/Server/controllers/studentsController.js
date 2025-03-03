const studentModel = require("../model/student")

// create    
const createStudentInfo= async (req,res)=>{
    const { Name,Roll_No,Standerd } = req.body
    if(!Name || !Roll_No || !Standerd)
    {
        res.status(400).json({message:"Name,Roll_NO and Standard is required"})
    }
    try {
        await studentModel.create({Name,Roll_No,Standerd})
        res.status(200).json({message:"Student information is created successfully"})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

// get  all data     
const getStudentsInfo= async (req,res)=>{
const AllStudentsInfo=await studentModel.find()
try {
    if(AllStudentsInfo.length==0)
        {
        return res.status(200).json({message:"Information is not available"})
        }
        res.status(200).json({Data:AllStudentsInfo})
} catch (error) {
    console.log(error)
}   
}
// get single data
const GetSingleStudentInfo = async (req, res) => {
    const { _id } = req.params;
    const isStudent = await studentModel.findById(_id)
    try {
        if (!isStudent) {
            res.status(400).json({ message: "notes not found" })
        }

        res.status(200).json({ data: isStudent })

    } catch (error) {
        res.status(400).json({ message: error })
    }

}

// delate    
const delateStudentData= async(req,res)=>{
    const {_id}=req.params
    console.log(_id)
    const isStudent = await studentModel.findById(_id)
try {
    await studentModel.deleteOne(isStudent)
   res.status(200).json({studentinfo:"Student info delated successfully"})
} catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
}
}

// update     
const updateStudentInfo=async(req,res)=>{
const {_id}=req.params
console.log(_id)
try {
    const isStudentData=await studentModel.findById(_id)
    if(!isStudentData)
    {
        res.status(400).json({message:"Student data not found"})
    }
    else
    {
        await studentModel.findByIdAndUpdate(_id,{
            ...req.body
        })
        res.status(200).json({messge:"Student Information updated successfully"})
    }
} catch (error) {
    res.status(400).json({messge:error})
}
}

module.exports={createStudentInfo,getStudentsInfo,delateStudentData,updateStudentInfo,GetSingleStudentInfo}