import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.css'
import myImage from '../mymess_logo.png';
import axios from 'axios';
import logo from '../assets/logo.png'
import './anim.css'

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [newsItems, setNewsItems] = useState([]);

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
                <div class="loginText">
                Sign up for the hostel mess of your choice
            </div>
            <div class="loginForm">
                    <div class="radioTile">
                        <label for="already">
                            <div class="labelText">already a mess inmate?</div>
                            <div class="radioButtonDiv">
                                <input type="radio" id="already"  name='option' value='existing' checked={selectedOption === 'existing'} onChange={handleChange}/>
                                <span class="radioButton"></span>
                                <span class="radioButton2"></span>
                            </div>    
                        </label>     
                    </div>
                    <br/>
                    <div class="radioTile">
                        <label for="notyet">
                            <div class="labelText">not yet a mess inmate?</div>
                            <div class="radioButtonDiv">
                                <input type="radio" id="notyet" name='option' value='new' checked={selectedOption === 'new'} onChange={handleChange}/>
                                <span class="radioButton"></span>
                                <span class="radioButton2"></span>
                            </div>
                        </label>
                    </div>
            </div>
            <div class="submitDiv">
                <button class="submitButton" onClick={handleClick}>Continue</button>
            </div>
                   {/* <h1>Choose an Option</h1>
                    <div className='radio-group'>
                        <label className='labelClass'>Already a mess inmate</label>
                        <input type='radio' name='option' value='existing' checked={selectedOption === 'existing'} onChange={handleChange}></input>
                    </div>
                    <div className='radio-group'>
                        <label className='labelClass'>Not a mess inmate</label>
                        <input type='radio' name='option' value='new' checked={selectedOption === 'new'} onChange={handleChange}></input>
                    </div>
                    <button className=" buttonGreen" onClick={handleClick}>Continue</button>
    */}

                </div>
                <div className='logoPart'>
                    <img class="MyMessImg" src={logo} alt="logo" />
                    <div className='MyMessTextDiv'>
                        <div class="MyMessText">MyMess</div>
                        <div class="MyMessTagline">
                        the #1 destination for
                        all your mess needs
                        </div>
                    </div>
                    
                </div>
            </div>
          {/*  <div className='news-section'>
                <ul className='news-section-ul'>
                    {newsItems.map((item, index) => (
                        <li key={index}>{item.content}</li>
                    ))}

                </ul>
            </div>
                    */}

        </div>
      

    )
}

export default Main
