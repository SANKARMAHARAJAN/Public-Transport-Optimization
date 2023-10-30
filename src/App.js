import React from 'react';
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Login1 from './components/Login1';
import UserScreen from './components/UserScreen';
import Trackvehicle from './components/Trackvehicle';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/user" element={<Login/>} />
        <Route path="/login/municipality" element={<Login1/>} />
        <Route path="/login/truck driver" element={<Login1/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user" element={<UserScreen/>} />
        <Route path="/trackvehicle" element={<Trackvehicle/>} />
        


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;