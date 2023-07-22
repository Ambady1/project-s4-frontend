import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Main.css'
import myImage from '../mymess_logo.png';
const Main = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const navigate = useNavigate()
    const handleClick = () => {
        if (selectedOption === 'new') {
            navigate('/signup')
        }
        else if (selectedOption === 'existing') {
            navigate('/login')
        }
    }
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }
    return (
        <div className='totalContainer'>


            <div className='container'>
                <div className='loginPart'>
                    <h1>Choose an Option</h1>
                    <div className='radio-group'>
                        <label className='labelClass'>Already a mess inmate</label>
                        <input type='radio' name='option' value='existing' checked={selectedOption === 'existing'} onChange={handleChange}></input>
                    </div>
                    <div className='radio-group'>
                        <label className='labelClass'>Not a mess inmate</label>
                        <input type='radio' name='option' value='new' checked={selectedOption === 'new'} onChange={handleChange}></input>
                    </div>
                    <button className=" buttonGreen" onClick={handleClick}>Continue</button>
                </div>
                <div className='logoPart'>
                    <img id="logo" src={myImage} alt="logo" />
                    <h1 id="mymess">MyMess</h1>
                </div>
            </div>
            <div className='news-section'>
                <ul className='news-section-ul'>
                    <li>New Hostel Mess 'Food Delight' Opens with Exciting Menu Options!</li>
                    <li>Special Festive Menu Announcement: Enjoy a Grand Diwali Feast at the Mess!</li>
                    <li>Upgraded Dining Facilities Coming Soon to Enhance Your Mess Experience!</li>
                    <li>Attention Vegetarians: Exciting New Vegetarian Food Stations Added to the Mess!</li>
                    <li>Delicious Continental Cuisine Added to the Mess Menu for International Students!</li>
                    <li>Mess Feedback Week: Share Your Thoughts and Win Exciting Prizes!</li>
                    <li>Healthy Eating Campaign: Discover Nutritious Meal Options at the Mess!</li>
                    <li>New 'Chef's Special' Menu Launch: Indulge in Signature Dishes Every Weekend!</li>
                    <li>Exciting Theme Nights: Enjoy Mexican Fiesta, Italian Extravaganza, and More!</li>
                    <li>Get Ready for a Spicy Twist: Introducing 'Street Food Junction' in the Mess!</li>

                </ul>
            </div>

        </div>
    )
}

export default Main
