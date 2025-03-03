import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateStudentInfo = () => {
  const [studentata, setstudentdata] = useState({
    Name: "",
    Roll_No: "",
    Standerd: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstudentdata({ ...studentata, [name]: value });
  };

  const {id}=useParams()
  const getsinglestudentdata = () => {
    axios.get(`http://localhost:8080/studentsinfo/getsinglestudentinfo/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        console.log(res.data.data)
        setstudentdata(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8080/studentsinfo/update/${id}`,studentata,{withCredentials:true})
    .then((res)=>{
      alert("Student Information updated successfully")
    })
    .catch((err)=>{
      alert(err)
    })
  };

  useEffect(() => {
     getsinglestudentdata()
  }, []); 

  return (
    <div>
      <form action="" className='p-5 m-5 bg-slate-500 w-[400px]' onSubmit={handleSubmit}>
        <p className='font-bold text-center pt-5 text-white'>Update Student Information</p>
        <input type="text" placeholder='Enter Name' className='p-2 border mt-1 border-black rounded' name='Name' value={studentata.Name} onChange={handleChange} /><br />
        <input type="number" placeholder='Enter Roll_No' className='p-2 mt-1 border border-black rounded' name="Roll_No" value={studentata.Roll_No} onChange={handleChange}/> <br />
        <input type="number" placeholder='Enter Standard' className='p-2 mt-1 border border-black rounded' name='Standerd' value={studentata.Standerd} onChange={handleChange} /> <br />
        <button className='p-2 mt-3 border border-black rounded bg-white ps-5 pe-5' type='submit'> Update  </button>
      </form>
    </div>
  )
}

export default UpdateStudentInfo
