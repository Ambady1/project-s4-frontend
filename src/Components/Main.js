import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Main.css'
const Main = () => {
    const [selectedOption,setSelectedOption] = useState('')
    const navigate = useNavigate()
    const handleClick=()=>{
        if(selectedOption === 'new'){
            navigate('/signup')
        }
        else if(selectedOption === 'existing'){
            navigate('/login')
        }
    }
    const handleChange=(e)=>{
        setSelectedOption(e.target.value)
    }
    return (
        <div>
            <div className='news-section'>
            <ul className='news-section-ul'>
                <li>News 1 bihdsub fbdunsfn inuhsjidnb dsijsinv </li>
                <li>News 2 jinsndnvn neuwfinvn ijjnd vbn ncnbem</li>
                <li>News 3 injjsv nneunv  isnvni sndivn snije jdsnv</li>
                <li>News 4 ijiciun dnsnjvnud jdudv osnnvd isnunnv</li>
                <li>News 5 jndvnn ndsnvn insnvd undsndsn j djn snvsn nunnd</li>
                <li>News 6 snfnn dnnjijf iunfsnf undsunnn sndu snubnub snjdn</li>
                <li>News 7 sndnnunin j d husnvnjd sndnu sd djdbrthygh sdudsnfbs</li>

            </ul>
        </div>
        <div className='container'>
            <h1>Choose an Option</h1>
            <div className='radio-group'>
                <label>Already a mess inmate</label>
                <input type='radio' name='option' value='existing' checked={selectedOption === 'existing'} onChange={handleChange}></input>
            </div>
            <div className='radio-group'>
                <label>Not a mess inmate</label>
                <input type='radio' name='option' value='new' checked={selectedOption === 'new'} onChange={handleChange}></input>
            </div>
            <button onClick={handleClick}>Continue</button>
        </div>
        </div>
    )
}

export default Main
