import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
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
        <div className="InputDiv">
            <h1>Register</h1>
            <input className="InputBox" type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="InputBox" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="InputBox" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" />
            <input className="InputBox" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" />
            <input className="InputBox" type="date" value={Date} onChange={(e) => setDate(e.target.value)} placeholder="DOB" />
            <input className="InputBox" type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />

            <button type="button" onClick={CollectData}>Sign Up</button>

            <div className="Link-signup">
                Already have an account? click here to &nbsp;
                <Link to={'/login'}>
                    LOGIN
                </Link>
            </div>

        </div>
    )
}
export default Signup;