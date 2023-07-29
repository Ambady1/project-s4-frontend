import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Main.css'
import myImage from '../mymess_logo.png';
import axios from 'axios';
const Main = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [newsItems, setNewsItems] = useState([]);

    const navigate = useNavigate()
    const handleClick = () => {
        if (selectedOption === 'new') {
            navigate('/page1')
        }
        else if (selectedOption === 'existing') {
            navigate('/login')
        }
    }
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    //Useeffect for news 
    useEffect(() => {
        axios.get("http://localhost:8800/news")
            .then(response => {
                setNewsItems(response.data);
            })
            .catch(error => {
                console.log("Error occurred while fetching news(frontend):", error);
            });

    }, [])
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
                    {newsItems.map((item, index) => (
                        <li key={index}>{item.content}</li>
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Main
