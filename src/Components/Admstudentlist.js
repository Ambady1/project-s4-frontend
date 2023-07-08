import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admstudentlist.css';

const Admstudentlist = (admAuth) => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStud, setFilteredStud] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8800/admstudentlist')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  }, []);

  // Function to format date of birth
  const formatDateOfBirth = (dateOfBirth) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateOfBirth).toLocaleDateString(undefined, options);
  };

  // Function to handle search bar
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    const filtered = students.filter(
      student => student.studentid === parseInt(searchQuery)
    );
    setFilteredStud(filtered);
    setFlag(true);
  };
  

  return (
    <div>
      {admAuth.admAuth && (<>
        <input
        id='searchBar'
        type="text"
        placeholder="Search by Student ID"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button id="searchButtonList" onClick={handleClick}>Search</button>

      <div className='table-container'>
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
            {flag ? (
              filteredStud.map(student => (
                <tr key={student.studentid}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.studentid}</td>
                  <td>{formatDateOfBirth(student.dob)}</td>
                  <td>{student.phone}</td>
                </tr>
              ))
            ) : (
              students.map(student => (
                <tr key={student.studentid}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.studentid}</td>
                  <td>{formatDateOfBirth(student.dob)}</td>
                  <td>{student.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      </>)}

    </div>
  );
};

export default Admstudentlist;
