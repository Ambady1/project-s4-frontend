import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Feedback from './Components/Feedback';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome';
import Admstudentlist from './Components/Admstudentlist';
import Admeditmenu from './Components/Admeditmenu';
import Main from './Components/Main';
function App() {
  
  const [studAuth, setAuth] = useState(false)
  const[admAuth,setAdmAuth]=useState(false)
  const [loginData, setloginData] = useState('')

  //Checks if student is logged in 
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8800/login').then((response) => {
      if (response.data.loggedIn === true) {
        setAuth(true);
        setloginData(response.data.user[0])
      }
    });
  }, []);

    //Checks if admin is logged in 
    useEffect(() => {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:8800/adminlogin').then((response) => {
        if (response.data.loggedIn === true) {
          setAdmAuth(true);
          setloginData(response.data.admin[0])
        }
      });
    }, []);
  return (
    <div >
      <BrowserRouter>
        <Nav studAuth={studAuth} setAuth={setAuth} admAuth={admAuth} setAdmAuth={setAdmAuth}/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/home' element={<Home auth={studAuth} loginStatus={loginData}/>} />
          <Route path='/qr' element={<h1>Scan QR</h1>} />
          <Route path='/profile' element={<h1>Profile component</h1>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/menu' element={<Menu auth={studAuth}/>}/>
          <Route path='/feedback' element={<Feedback auth={studAuth} loginStatus={loginData}/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminhome' element={<AdminHome admAuth={admAuth}/>}/>
          <Route path='/admstudentlist' element={<Admstudentlist admAuth={admAuth}/>}/>
          <Route path='/admeditmenu' element={<Admeditmenu/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App