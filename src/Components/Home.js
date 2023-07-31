import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import viewProfile from '../assets/viewProfile.png';
import scanQR from '../assets/scanQR.png';
import liveBill from '../assets/liveBill.png';
import messCut from '../assets/messCut.png';
import payBill from '../assets/payBill.png';
import feedback from '../assets/feedback.png';
import messMenu from '../assets/messMenu.png';
import rules from '../assets/rules.png';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Home = ({auth,loginStatus}) => {

  const [newsItems, setNewsItems] = useState([]);
console.log(newsItems);
  const navigate = useNavigate();
  const handleProfile=()=> {
    navigate('/profile')
  }
  const handleMenu =()=>{
    navigate('/menu')
  }
  const handleFeedback=()=>{
    navigate('/feedback')
  }
  const handleQRcode=()=>{
    navigate('/qr')
  }
  const handleMessCut=()=>{
    navigate('/messcut')
  }
  const handleMessbill=()=>{
    navigate('/livemessbill')
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

console.log(newsItems)
  return (
    <div className='homeTotalContainer'>
      {auth ? (
        <>
        <div className='homeContainer'>
        <h1 className='welcomeText' id='welcomeId'>Welcome, {loginStatus.name}!</h1>

        <div className="notifSlider">
              <div className="ticker">
                <div className="notifLabel">NOTIFICATIONS</div>
                {newsItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <span className="notifBreaker"></span>
                    <div className="notifText">{item.content}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>

        <div className="card-container">
            <div className="card" id="viewProfile" onClick={handleProfile}>
              <img src={viewProfile} alt="View Profile"/>
              <button className="boxText">View Profile</button>
            </div>
            <div className="card" id="scanQR" onClick={handleQRcode}>
              <img src={scanQR} alt="Scan QR Code"/>
              <button className="boxText">Scan QR Code</button>
            </div>
            <div className="card" id="liveBill" onClick={handleMessbill}>
              <img src={liveBill} alt="Live Bill Tracking"/>
              <button className="boxText">Live Bill Tracking</button>
            </div>
            <div className="card" id="messCut" onClick={handleMessCut}>
              <img src={messCut} alt="Online Mess Cut"/>
              <button className="boxText">Online Mess Cut</button>
            </div>
            <div className="card" id="payBill">
              <img src={payBill} alt="Pay Mess Bill"/>
              <button className="boxText">Pay Mess Bill</button>
            </div>
            <div className="card" id="feedback" onClick={handleFeedback}>
              <img src={feedback} alt="Feedback & Suggestions"/>
              <button className="boxText">Feedback & Suggestions</button>
            </div>
            <div className="card" id="messMenu" onClick={handleMenu}>
              <img src={messMenu} alt="Mess Actions"/>
              <button className="boxText">View Menu</button>
            </div>
            <div className="card" id="rules">
              <img src={rules} alt="Rules & Regulations"/>
              <button className="boxText">Rules & Regulations</button>
            </div>        
          </div>
        </div>
          

        </>) : null}
    </div>
  )
}

export default Home
