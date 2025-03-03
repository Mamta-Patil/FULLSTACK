import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard'

const Student = () => {
const [studetdata,setstudentdata]=useState([])

    const getAllStudentsData=()=>{
     axios.get("http://localhost:8080/studentsinfo/getalldata",{withCredentials:true})
     .then((res)=>{
        console.log(res.data.Data)
        setstudentdata(res.data.Data)
     })
     .catch((err)=>{
        console.log(err)
     })
    }

    useEffect(()=>{
        getAllStudentsData()
    },[])

  return (
    <div>
      <h2 className='text-3xl font-bold underline text-center pt-5'>Student Information : </h2>
      <div className='lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4'>
        {studetdata.map((el)=> <StudentCard key={el.id} id={el._id} Name={el.Name} Roll_No={el.Roll_No} Standerd={el.Standerd} /> )}
      </div>
    </div>
  )
}

export default Student
