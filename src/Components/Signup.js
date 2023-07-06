import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import myImage from 'D:/coding/dbms project/project-s4-frontend/src/mymess_logo.png';
const Signup = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [StudentID, setStudentID] = useState('')
    const [Password, setPassword] = useState('')
    const [Date, setDate] = useState('')
    const [Phone, setPhone] = useState('')


    const CollectData = () => {
        Axios.post('http://localhost:8800/add', {
            name: Name,
            email: Email,
            sid: StudentID,
            pass: Password,
            dob: Date,
            phone: Phone
        }).then(() => {
            alert("Registration completed successfully!")
            window.location.reload();
        })
    }

    return (
        <div className="signMainDiv">
        <div className="SignInDiv1">
            <h1 id="registerId">Register</h1>
            <input className="InputBox1" type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br/>
            <input className="InputBox1" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br/>
            <input className="InputBox1" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" /><br/>
            <input className="InputBox1" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" /><br/>
            <input className="InputBox1" type="date" value={Date} onChange={(e) => setDate(e.target.value)} placeholder="DOB" /><br/>
            <input className="InputBox1" type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" /><br/>

            <button id="SignInButtonId" type="button" onClick={CollectData}>Sign Up</button>

            <div className="Link-signup">
                Already have an account? click here to &nbsp;
                <Link to={'/login'} id="loginLink">
                    LOGIN
                </Link>
            </div>

        </div>
        <div className="SignInDiv2">
        <img id = "logo" src={myImage} alt="logo" />
            <h1 id="mymess">MyMess</h1>
            </div>
        </div>
    )
}
export default Signup;