import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import myImage from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Signup = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [StudentID, setStudentID] = useState('')
    const [Password, setPassword] = useState('')
    const [Date, setDate] = useState('')
    const [Phone, setPhone] = useState('')

    // Access the passed props using useLocation
    const location = useLocation();
    const { Messname, Semester, Dept, Preference } = location.state || {}; // Use optional chaining

    // Function to trigger the page reload after registration is completed successfully
    const handleReload = () => {
        alert("Registration completed successfully!");
        window.location.reload();
    };

    // Function to collect data and trigger the registration process
    const CollectData = () => {
        Axios.post('http://localhost:8800/add', {
            name: Name,
            email: Email,
            sid: StudentID,
            pass: Password,
            dob: Date,
            phone: Phone,
            hostel: Messname,
            sem: Semester,
            dept: Dept,
            pref: Preference
        }).then(handleReload)
        .catch((error) => {
            // Handle error if the registration fails
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again later.");
        });
    };

    return (
        <div className="signMainDiv">
            <div className="SignInDiv1">
                <h1 id="registerId">Register</h1>
                <input className="InputBox1" type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br />
                <input className="InputBox1" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                <input className="InputBox1" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" /><br />
                <input className="InputBox1" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" /><br />
                <input className="InputBox1" type="date" value={Date} onChange={(e) => setDate(e.target.value)} placeholder="DOB" /><br />
                <input className="InputBox1" type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" /><br />

                <button id="SignInButtonId" type="button" onClick={CollectData}>Sign Up</button>

                <div className="Link_signup">
                    Already have an account? click here to &nbsp;
                    <Link to={'/login'} id="loginLink">
                        LOGIN
                    </Link>
                </div>
            </div>
            <div className="SignInDiv2">
                <img id="logo" src={myImage} alt="logo" />
                <h1 id="mymess">MyMess</h1>
            </div>
        </div>
    )
}

export default Signup;
