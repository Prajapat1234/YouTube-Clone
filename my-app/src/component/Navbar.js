import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar({ setInput, toggleMenu }) {
  const [transcript, setTranscript] = useState();
  const [listening, setListening] = useState(false);
  // let [display, setDisplay] = useState(true);
  // let [slide, setSlide] = useState(0);

  let recognition = null;

  const startListening = () => {
    recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      console.log(transcript)
      setInput(transcript)

    };

    recognition.onend = () => {
      setListening(false);
      console.log("End Speech")
    };

    recognition.start();
    console.log("listening....")
    setListening(true);
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  const handleSearch = () => {
    setInput(transcript)
    setTranscript(transcript)
    console.log(transcript);
    // setSearchQuery(transcript);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }


  return (
    <>
      <div id="main">
        <div id="Firstbox">
          <MenuIcon id="MenuIcon" onClick={toggleMenu} />
          <img src={process.env.PUBLIC_URL + '/media/YouTube_Logo_2017.svg.png'} alt="YouTube Logo" />
        </div>
        <div id="Searchbar">
          <input
            type="search"
            value={transcript}
            placeholder="search... "
            onChange={(e) => setTranscript(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <img id="KeyboardIcon" src="//www.gstatic.com/inputtools/images/tia.png" tia_field_name="search_query" tia_disable_swap="true" tia_property="youtube" />

        </div>
        <button id="SearchIcon"><SearchIcon onClick={handleSearch} /></button>
        <button id="mice" onClick={listening ? stopListening : startListening}><MicIcon /></button>

        <div id="Righticons">
          <VideoCallIcon />
          <NotificationsNoneIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
}