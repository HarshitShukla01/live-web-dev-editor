import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Editor from './components/Editor';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/editor" element={<Editor/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

