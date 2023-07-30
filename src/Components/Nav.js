import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import './Nav.css';

const Navbarx = ({ studAuth, setAuth, admAuth, setAdmAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = () => {
    Axios.get('http://localhost:8800/logout', { withCredentials: true })
      .then(() => {
        setAuth(false);
        navigate('/login');
      })
      .catch((err) => {
        console.log("This error");
      });
  };

  const handleAdminLogout = () => {
    Axios.get('http://localhost:8800/adminlogout', { withCredentials: true })
      .then(() => {
        setAdmAuth(false);
        navigate('/adminlogin');
      })
      .catch((err) => {
        console.log("This error");
      });
  };

  // Conditionally render Nav based on the route
  const shouldRenderNav = !['/', '/signup', '/login', '/page1'].includes(pathname);

  return (
    <div className='totalNavbar'>
      {shouldRenderNav && (
        <div className='logo'>
          <h1 id='myMessId'>MY MESS</h1>
        </div>
      )}
      <div className='logo_down'>
        <ul className='nav-ul'>
          {studAuth && (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/qr">Scan QR</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <button id="logoutButtonId" onClick={handleLogout}>Logout</button>
            </>
          )}
          {admAuth && (
            <>
              <button onClick={handleAdminLogout}>Logout</button>
            </>
          )}
          {!studAuth && !admAuth && (
            <>
              <li><Link to="/page1">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbarx;
