import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
        <div>
            <div className="InputDiv">

                <h1>Admin Login</h1>
                <input className="InputBox" type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="Enter Admin ID" />
                <input className="InputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button type="button" onClick={handleAdminlogin}>LOGIN</button>
            </div>
        </div>
    )
}

export default AdminLogin
