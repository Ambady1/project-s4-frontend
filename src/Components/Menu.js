import './Home.css';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Menu = ({auth}) => {
  console.log(auth)
  const [todayMenu, settodayMenu] = useState([]);
  const [tomorrowMenu, settomorrowMenu] = useState([]);

  const today = new Date();

  const handleTodaymenuClick = async () => {
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

    try {
      const response = await axios.get("http://localhost:8800/menu/" + dayOfWeek);
      settodayMenu(response.data);
    } catch (error) {
      console.error('Failed to get menu:', error);
    }

  };

  const handleTomorrowmenuClick = async () => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const nextdayOfWeek = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });

    try {
      const response = await axios.get("http://localhost:8800/menu/" + nextdayOfWeek);
      settomorrowMenu(response.data);
    } catch (error) {
      console.error('Failed to get menu:', error);
    }
  }

  return (
    <div className="card-container">
      {auth? (
      <>
      <div className="card">
        <h1>Today's Menu</h1>
        <button onClick={handleTodaymenuClick}>Refresh</button>
        {todayMenu.length > 0 ? (
          todayMenu.map((item) => {
            return (
              <div key={item.day}> {/* Adding key attribute to avoid warning */}
                <h3>Breakfast</h3>
                <p>{item.breakfast}</p>
                <h3>Lunch</h3>
                <p>{item.lunch}</p>
                <h3>Dinner</h3>
                <p>{item.dinner}</p>
              </div>
            )
          })
        ) : (
          <p>Click the button to refresh.</p>
        )}
      </div>

      <div className="card">
        <h1>Tomorrow's Menu</h1>
        <button onClick={handleTomorrowmenuClick}>Refresh</button>
        {tomorrowMenu.length > 0 ? (
          tomorrowMenu.map((item) => {
            return (
              <div key={item.day}> {/* Adding key attribute to avoid warning */}
                <h3>Breakfast</h3>
                <p>{item.breakfast}</p>
                <h3>Lunch</h3>
                <p>{item.lunch}</p>
                <h3>Dinner</h3>
                <p>{item.dinner}</p>
              </div>
            )
          })
        ) : (
          <p>Click the button to refresh.</p>
        )}
      </div>
      </>):null}
    </div>
  )
}

export default Menu
