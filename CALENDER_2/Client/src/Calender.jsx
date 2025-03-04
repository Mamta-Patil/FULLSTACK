import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const Calender = () => {
  const [date, setDate] = useState(new Date()); 
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>React Calendar</h2>
      <Calendar 
        onChange={setDate} 
        value={date} 
      />
      <p>Selected Date: {date.toDateString()}</p>
      <p> {date.toLocaleDateString("en-US")} </p>
      <p> {date.toLocaleDateString("en-GB")} </p>
    </div>
  );
};

export default Calender;
