// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Student = () => {
//     const [data, setdata] = useState([])
//     const [page, setPage] = useState(1);
//     const [loading ,setloading]=useState(false)


//     const limit =10 ;
//     const getdata = () => {
//         // axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
//         axios.get(`https://fakestoreapi.com/products?limit=${limit}&offset=${(page - 1) * limit}`)
//             .then((res) => {
//                 console.log(res.data)
//                 setdata(res.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         getdata()
//     }, [page])

//     return (
//         <div>
//             <p className='text-3xl font-bold underline'>Student Details</p>
//             <div className='grid grid-cols-3 gap-4'>
//                 {
//                     data.map((el, index) => (
//                         <div key={index} className='bg-slate-400 text-white rounded-md p-4' >
//                             {/* <img src={el.img} alt="" /> */}
//                             <p className='text-lg font-bold'> {el.title} </p>
//                             <p className='text-base pt-3'> {el.description} </p>
//                             <p className='text-base'> {el.price} </p>
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className='flex mt-5 justify-center'>
//                 <button className='p-2 border-2 border-gray-500' disabled={page==0} onClick={ ()=> setPage(page-1)}>Prev</button>
//                 <button className='p-2 border-2 border-gray-500 ms-3' disabled={page==4} onClick={ ()=> setPage(page+1)}>Next </button>
//             </div>

//         </div>
//     )
// }

// export default Student
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Student = () => {
    const [allData, setAllData] = useState([]); // Store all products
    const [data, setData] = useState([]); // Paginated data
    const [page, setPage] = useState(1);
    const limit = 5; // Set limit to 5

    // Fetch all products once
    const fetchAllData = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products`);
            setAllData(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Update paginated data whenever `page` changes
    useEffect(() => {
        fetchAllData();
    }, []);

    useEffect(() => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        setData(allData.slice(startIndex, endIndex)); // Slice data for pagination
    }, [page, allData]);

    return (
        <div>
            <p className='text-3xl font-bold underline'>Student Details</p>
            <div className='grid grid-cols-3 gap-4'>
                {data.map((el, index) => (
                    <div key={index} className='bg-slate-400 text-white rounded-md p-4'>
                        <p className='text-lg font-bold'>{el.title}</p>
                        <p className='text-base pt-3'>{el.description}</p>
                        <p className='text-base'>${el.price}</p>
                    </div>
                ))}
            </div>
            <div className='flex mt-5 justify-center'>
                <button
                    className='p-2 border-2 border-gray-500'
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>
                <button
                    className='p-2 border-2 border-gray-500 ms-3'
                    disabled={page >= Math.ceil(allData.length / limit)}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Student;
