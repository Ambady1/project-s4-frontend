import React, {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
const Login = () => {
    const [StudentID, setStudentID] = useState('')
    const [Password, setPassword] = useState('')
  
const navigate = useNavigate()
    const CollectData = () => {
        Axios.post('http://localhost:8800/login', {
            sid: StudentID,
            pass: Password,
        }, { withCredentials: true }).then((response) => {
            
            if (response.data.message) {

                alert(`Sorry ${response.data.message}!`);
            }
            else {

                alert("Login successful");
                navigate('/home')
                window.location.reload()

            }
        })
    }
    
    return (
        <div className="InputDiv">

            <h1>Login</h1>
            <input className="InputBox" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" />
            <input className="InputBox" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <button type="button" onClick={CollectData}>LOGIN</button>
            <div className="Link-signup">
                Dont have an account? click here to &nbsp;
                <Link to={'/signup'}>
                    REGISTER
                </Link>
            </div>
        </div>
    )
}

export default Login
