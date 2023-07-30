import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeeDefaulters.css'
const FeeDefaulters = () => {
  const [defaultersData, setDefaultersData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/feedefaulters');
        setDefaultersData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // Function to format the date of birth
  const formatDateOfBirth = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h1>Fee Defaulters</h1>
      <div className='tableEdit'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Student ID</th>
            <th>Date of Birth</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through defaultersData to render the table rows */}
          {defaultersData.map((defaulter) => (
            <tr key={defaulter.studentid}>
              <td>{defaulter.name}</td>
              <td>{defaulter.email}</td>
              <td>{defaulter.studentid}</td>
              <td>{formatDateOfBirth(defaulter.dob)}</td>
              <td>{defaulter.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FeeDefaulters;
