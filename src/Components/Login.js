import React, {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import myImage from 'D:/coding/dbms project/project-s4-frontend/src/mymess_logo.png';
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
            <div className="loginPart">
            <h1 id="loginHead">Login</h1>
            <input className="InputBox" type="text" value={StudentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" />
            <input className="InputBox" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <button type="button" onClick={CollectData}>LOGIN</button>
            <div className="Link-signup">
                Dont have an account? click here to &nbsp;
                <Link id = "signupid" to={'/signup'}>
                    REGISTER
                </Link>
            </div>
            </div>
            <div className="logoPart">
            <img id = "logo" src={myImage} alt="logo" />
            <h1 id="mymess">MyMess</h1>
                
            </div>
        </div>
    )
}

export default Login
