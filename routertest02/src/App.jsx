//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
        <Link to={"/profile"}>Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <footer>footer입니다</footer>
    </BrowserRouter>
  )
}

export default App
