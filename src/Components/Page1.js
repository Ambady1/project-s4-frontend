//Page to get values messname,Dept,sem,pref
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../mymess_logo.png';
import './Page1.css'
import { Link } from "react-router-dom";
const Page1 = () => {
    const [Messname, setMessname] = useState('')
    const [Semester, setSemester] = useState('')
    const [Dept, setDept] = useState('')
    const [Preference, setPreference] = useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the SignUp component and pass the values as props
        navigate('/signup', {
          state: {
            Messname,
            Semester,
            Dept,
            Preference,
          },
        });
      };
    
    return (
        <div className="signMainDiv1">
            <div className="SignInDiv1A">
                <h1 id="registerId1">Register</h1>
                <select className="InputBox2" id="hostelMess" name="hostelMess" onChange={(e) => setMessname(e.target.value)}>
                    <option value="0" selected hidden>select hostel mess</option>
                    <option value="Sahara">Sahara</option>
                    <option value="Sagar">Sagar</option>
                    <option value="Sanathana">Sanathana</option>
                    <option value="Sarovar">Sarovar</option>
                    <option value="Sahrudaya">Sahrudaya</option>
                    <option value="Siberia">Siberia</option>
                    <option value="Swaraj">Swaraj</option>
                </select>
                <select className="InputBox1" id="department" name="department" onChange={(e) => setDept(e.target.value)}>
                    <option value="0" selected hidden>select department</option>
                    <option value="Civil">CIVIL</option>
                    <option value="CS">CS</option>
                    <option value="EEE">EEE</option>
                    <option value="ECE">ECE</option>
                    <option value="IT">IT</option>
                    <option value="Mech">MECH</option>
                    <option value="Safety">SAFETY</option>
                </select>
                <select className="InputBox1" id="sem" name="sem" onChange={(e) => setSemester(e.target.value)}>
                    <option value="0" selected hidden>select semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <select className="InputBox1" id="pref" name="pref" onChange={(e) => setPreference(e.target.value)}>
                    <option value="0" selected hidden>select food preference</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Veg">Veg</option>
                </select>
                <button id="SignInButtonId1" type="button" onClick={handleClick}>Next</button>

                <div className="Link_signup1">
                    Already have an account? click here to &nbsp;
                    <Link to={'/login'} id="loginLink">
                        LOGIN
                    </Link>
                </div>
            </div>
            <div className="SignInDiv2A">
                <img id="logo" src={myImage} alt="logo" />
                <h1 id="mymess">MyMess</h1>
            </div>

        </div>

    )
}

export default Page1
