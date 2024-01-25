import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Insidecontent from './component/Insidecontent';


export default function App() {

  let [Input, setInput] = useState("india");
  let [slide, setSlide] = useState(0);
  let [display, setDisplay] = useState(true);

   
  function toggleMenu() {
    setDisplay(!display);
    setSlide(display ? -230 : 0);
  }


  return (
    <div>

      <BrowserRouter>
        <Navbar setInput={setInput} setSlide = {setSlide} toggleMenu = {toggleMenu}/>
        {/* <Insidecontent Input={Input} /> */}
        <Sidebar display ={display} toggleMenu = {toggleMenu} slide = {slide}/>
        <Routes>
          {/* <Route path='/' element={<Sidebar display ={display} toggleMenu = {toggleMenu} slide = {slide}/>} /> */}
          <Route path='/' element = { <Insidecontent Input={Input} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

