import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ loginStatus }) => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    // Function to fetch student profile data from the API
    if (loginStatus && loginStatus.studentid) {
      axios.post('http://localhost:8800/studentprofile', {
        sid: loginStatus.studentid // Use loginstatus.studentid directly here
      })
        .then((response) => {
         setProfileData(response.data[0])
        })
        .catch((error) => {
          console.log("Error occurred");
        });
    }
  }, [loginStatus]); // Add loginstatus to the dependency array

  const formatDateOfBirth = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <h1>Student Profile</h1>
      {profileData ? (
        <div>
          <p>Student ID: {profileData.studentid}</p>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Date of Birth: {formatDateOfBirth( profileData.dob)}</p>
          <p>Mess-Name: {profileData.messname}</p>
          <p>Semester: {profileData.semester}</p>
          <p>Department: {profileData.department}</p>
          <p>Preference: {profileData.preference}</p>

        </div>
      ) : (
        <p>Loading student profile...</p>
      )}
    </div>
  );
};

export default Profile;
