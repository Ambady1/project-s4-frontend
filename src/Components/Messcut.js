import React, { useState } from 'react';
import './Messcut.css';
import Axios from 'axios';
import myImage from '../mymess_logo.png';
import { format, differenceInDays } from 'date-fns';

const Messcut = ({ loginStatus }) => {
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);

  const handleFirstDateChange = (event) => {
    // Update the first picked date
    setFirst(new Date(event.target.value));
  };

  const handleLastDateChange = (event) => {
    // Update the second picked date
    setLast(new Date(event.target.value));
  };

  const handleSubmit = async () => {
    if (first && last) {
      // Calculate the number of days between the selected dates
      const daysInBetween = differenceInDays(last, first) + 1;

      // Format the selected dates for logging
      const formattedFirstDate = format(first, 'yyyy-MM-dd');
      const formattedLastDate = format(last, 'yyyy-MM-dd');

      Axios.post('http://localhost:8800/messcut',{
        sid: loginStatus.studentid,
        start:formattedFirstDate,
        end:formattedLastDate,
        nod:daysInBetween
      }).then((response)=>{
        console.log(response)
      })

      // Clear the selected dates after successful submission
      clearSelection();
    }
  };

  const clearSelection = () => {
    setFirst(null);
    setLast(null);
  };

  return (
    <div className='messcutMainDiv'>
      <div className='dataPart'>
        <h1>MessCut</h1>
        <h2>Pick Cut Start Date:</h2>
        <input type='date' value={first ? format(first, 'yyyy-MM-dd') : ''} onChange={handleFirstDateChange} />
        <h2>Pick Cut End Date:</h2>
        <input type='date' value={last ? format(last, 'yyyy-MM-dd') : ''} onChange={handleLastDateChange} />
        <button id='calenderSubmitButton' onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className='logoPart2'>
        <img id='logo' src={myImage} alt='logo' />
        <h1 id='mymess'>MyMess</h1>
      </div>
    </div>
  );
};

export default Messcut;
