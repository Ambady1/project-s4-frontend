import React from 'react'
import './AdminHome.css'
import { useNavigate } from 'react-router-dom';

const AdminHome = (admAuth) => {
  const navigate = useNavigate()
  
  const handleStudentlist = (e) => {
    e.preventDefault()
    navigate('/admstudentlist')
  }

  const handleEditMenu = (e) => {
    e.preventDefault()
    navigate('/admeditmenu')
  } 
  return (
    <div>
      <div>
        {admAuth.admAuth ? (
          <>
            <h1 id='adminHeading' >Welcome Admin</h1>

            <div className="card-container">
              <div className="card">
                <h2>See student list</h2>
                <p>Click here to see the list of students </p>
                <button onClick={handleStudentlist}>Student list</button>
              </div>
              <div className="card">
                <h2>See fee defaulters</h2>
                <p>Click here to see the list of fee defaulters</p>
                <button>See fee defaulters</button>
              </div>
              <div className="card">
                <h2>Edit menu</h2>
                <p>Click here to edit menu</p>
                <button onClick={handleEditMenu}>Edit menu</button>
              </div>
              <div className="card">
                <h2>Update notice</h2>
                <p>Click here to update notice</p>
                <button>Update notice</button>
              </div>
            </div>
          </>) : null}
      </div>
    </div>
  )
}

export default AdminHome
