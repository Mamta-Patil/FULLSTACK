import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = ({ id, Name, Roll_No, Standerd }) => {

    const handleDelate = (_id) => {
        console.log(_id)
        axios.delete(`http://localhost:8080/studentsinfo/delate/${id}`)
            .then((res) => {
                alert("student information delated succeesfully")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='bg-slate-500 m-5 p-5 text-white font-serif rounded text-center'>
            <p> Name : {Name} </p>
            <p> Roll_No : {Roll_No} </p>
            <p> Standerd : {Standerd} </p>
            <div className="flex justify-around mt-4">
                <button className='bg-white text-black rounded-full w-20 h-10' onClick={() => { handleDelate(id) }}> Delete </button>
                <button className='bg-white text-black rounded-full w-20 h-10' >
                    <Link to={`/edit/${id}`}>Edit</Link>
                </button>
            </div>
        </div>
    )
}

export default StudentCard
