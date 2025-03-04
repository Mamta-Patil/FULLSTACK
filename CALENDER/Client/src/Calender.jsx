import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const Calender = () => {
  const [date, setDate] = useState(new Date()); 
  const [disabledEven, setDisabledEven] = useState(false); 
  const [count,setCount]=useState(0)

  const add=()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
  } 

  const tileDisabled = ({ date }) => {
    if (disabledEven) {
      return date.getDate() % 2 === 0; 
    }
    return false;
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>React Calendar</h2>
      <Calendar 
        onChange={setDate} 
        tileDisabled={tileDisabled}
        value={date} 
      />
      <p>Selected Date: {date.toDateString()}</p>
      <div className='d-flex'>
      <button 
          onClick={() => setDisabledEven(true)} 
          className="btn btn-danger m-2"
        >
          Disable Even Dates
        </button>
      <button 
          onClick={() => setDisabledEven(false)} 
          className="btn btn-success m-2"
        >
          Show All Dates
        </button>
      </div>

      {/* <div className="counter">
        {count} <br />
        <button className='border border-2 border-info' onClick={add}>Add</button>
      </div> */}
    
    </div>
  );
};

export default Calender;
