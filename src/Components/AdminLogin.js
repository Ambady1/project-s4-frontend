import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const AdminLogin = () => {
const navigate = useNavigate()
    const [adminId, setAdminId] = useState('')
    const [password, setPassword] = useState('')
    const handleAdminlogin = () => {
        axios.post('http://localhost:8800/adminlogin',{
            aid : adminId,
            pass : password
        }).then((response)=>{
            if (response.data.message) {

                alert(`Sorry ${response.data.message}!`);
            }
            else {

                alert("Login successful");
                navigate('/adminhome')
                window.location.reload()

            }
        })
    }
    return (
        <div className='adminMain'>
            <div className="loginPart3">

                <h1 id='adminHead'>Admin Login</h1>
                <input className="InputBox3" type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="Enter Admin ID" /><br/>
                <input className="InputBox3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br/>
                <button id='adminLoginButton' type="button" onClick={handleAdminlogin}>LOGIN</button>
            </div>
            <div className='logoPart3'>
            <div className='MyMessImgDiv'>
                    <img className="MyMessImg" src={logo} alt="logo" />
                </div>
                    
                <div className='MyMessTextDiv'>
                    <div className="MyMessText">
                         MyMess
                    </div>
                    <div className="MyMessTagline">
                        the #1 destination for
                        all your mess needs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
