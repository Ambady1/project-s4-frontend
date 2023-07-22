import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({auth,loginStatus}) => {

  const navigate = useNavigate();
  const handleMenu =()=>{
  navigate('/menu')
  }

  const handleFeedback=()=>{
    navigate('/feedback')
  }
  const handleMessCut=()=>{
    navigate('/messcut')
  }
  const handleMessbill=()=>{
    navigate('/livemessbill')
  }
  
  return (
    <div>
      {auth ? (
        <>
          <h1 id='welcomeId'>Welcome {loginStatus.name}</h1>

          <div className="card-container">
            <div className="card">
              <h2 className='cardHeadings'>Menu</h2>
              <p>Click here to see the menu </p>
              <button onClick={handleMenu}>See Menu</button>
            </div>
            <div className="card">
              <h2 className='cardHeadings'>Live Mess bill</h2>
              <p>Click here to see your mess bill upto now</p>
              <button onClick={handleMessbill} >See Mess Bill</button>
            </div>
            <div className="card">
              <h2 className='cardHeadings'>Give Feedback</h2>
              <p>Click here to provide feedback</p>
              <button onClick={handleFeedback}>Give My Feedback</button>
            </div>
            <div className="card">
              <h2 className='cardHeadings'>Mess cut</h2>
              <p>Click here to do a mess cut</p>
              <button onClick={handleMessCut}>Apply Mess cut</button>
            </div>
          </div>
        </>) : null}
    </div>
  )
}

export default Home
