import axios from 'axios';
import React, { useState } from 'react'

const CreateStudentInfo = () => {
  const [studentata, setstudentdata] = useState({
    Name: "",
    Roll_No: "",
    Standerd: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstudentdata({ ...studentata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/studentsinfo/create`, studentata, { withCredentials: true })
      .then((res) => {
        console.log(res);
        alert("Information Created Succeessfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <form action="" className='p-5 m-5 bg-slate-500 w-[400px]' onSubmit={handleSubmit}>
        <p className='font-bold text-center pt-5 text-white'>Create Student Information</p>
        <input type="text" placeholder='Enter Name' className='p-2 border mt-1 border-black rounded' name='Name' value={studentata.Name} onChange={handleChange} /><br />
        <input type="number" placeholder='Enter Roll_No' className='p-2 mt-1 border border-black rounded' name="Roll_No" value={studentata.Roll_No} onChange={handleChange}/> <br />
        <input type="number" placeholder='Enter Standard' className='p-2 mt-1 border border-black rounded' name='Standerd' value={studentata.Standerd} onChange={handleChange} /> <br />
        <button className='p-2 mt-3 border border-black rounded bg-white ps-5 pe-5' type='submit'> Create  </button>
      </form>
    </div>
  )
}

export default CreateStudentInfo
