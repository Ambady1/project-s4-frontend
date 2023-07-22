import React from 'react'
import './Messcut.css'
import Axios from 'axios';
import myImage from '../mymess_logo.png';
import  { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { add, isAfter } from 'date-fns';

import 'react-multi-date-picker/styles/colors/purple.css';

 

 
 function MultiDatePicker() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = async (dates) => {
   
    const selectedDate = dates[0];

    let bundleDates = [];
    if (selectedDate) {
      bundleDates = [
        selectedDate,
        add(selectedDate, { days: 1 }),
        add(selectedDate, { days: 2 }),
      ];
    }

    const filteredDates = dates.filter(
      (date) =>
        isAfter(date, add(selectedDate, { days: 2 })) ||
        bundleDates.includes(date)
    );

    if (filteredDates.length >= 3) {
      setSelectedDates(filteredDates);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await Axios.post('http://localhost:8800/dummy', 
      {
        dates: selectedDates.map((date) => date.toISOString()),
      });

      console.log('Response:', response.data);

      // Clear the selected dates after successful submission
      clearSelection();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearSelection = () => {
    setSelectedDates([]);
  };

  return (
    <div>
      <DatePicker
        multiple
        value={selectedDates}
        onChange={handleDateChange}
        id='datePickerId'
        format="YYYY-MM-DD"
        minDate={add(new Date(), { days: 1 })}
        renderFooter={() => (
          <p>
            Selected Dates: {selectedDates.length >= 3 ? selectedDates.length : 'Minimum 3 dates required'}
          </p>
        )}
      />
      <button id='calenderSubmitButton' onClick={()=>{handleSubmit(); clearSelection();}}>Submit</button>
    </div>
  );
}

const Messcut = () => {
  return (
    <div className='messcutMainDiv'>
      <div className='dataPart'>
        <h1>MessCut</h1>
        
        <h2>Pick Date:</h2>
        <h3> (Minimum 3 days required)</h3>
        <MultiDatePicker className="calender"/>
        

      </div>


      <div className='logoPart2'>
      <img id = "logo" src={myImage} alt="logo" />
            <h1 id="mymess">MyMess</h1>
            </div>
      
    </div>
  )
};

export default Messcut
