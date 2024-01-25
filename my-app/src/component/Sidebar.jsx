import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import DownloadIcon from '@mui/icons-material/Download';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';



export default function Sidebar({ slide, toggleMenu, display }) {
  return (
    <>
      {display === false && (
        <div className="overlay" onClick={toggleMenu}>


          <a href="#" id="Homeicon">
            <HomeIcon />
            Home page
          </a>
          <a href="#" id="SubscriptionsSharpIcon">
            <SubscriptionsSharpIcon />
            Membership
          </a>
          <a href="#" id="SlideshowSharpIcon">
            <SlideshowSharpIcon />
            You
          </a>
          <a href="#" id="DownloadIcon">
            <DownloadIcon />
            downloaded
          </a>
          <a href="#" id="PlaylistAddIcon">
            < PlaylistAddIcon />
            Library
          </a>

        


        </div>
      )}

      <div id='Main' style={{ left: `${slide}0px` }}>
        <div id='upperSidebar'>
          <div id='HomeIcon'><HomeIcon />Home Page</div>
          <div id='shorts'>
            <img src={process.env.PUBLIC_URL + '/media/shorts.webp'} alt="shorts" />
            Shorts
          </div>
          <div id='SubscriptionsSharpIcon'><SubscriptionsSharpIcon />membership</div>
          <br />
          <div id='Breakline'></div>
          <br />

          {/* -----------second column--------------- */}

          <div id='KeyboardArrowRightSharpIcon'>
            you
            <KeyboardArrowRightSharpIcon />
          </div>
          <div id='PortraitSharpIcon'>
            <PortraitSharpIcon /> your channel
          </div>
          <div id='RestoreSharpIcon'>
            <RestoreSharpIcon />watched videos
          </div>
          <div id='SlideshowSharpIcon'>
            <SlideshowSharpIcon />your videos
          </div>
          <div id='AccessTimeIcon'>
            <AccessTimeIcon />see later
          </div>
          <div id='DownloadIcon'>
            <DownloadIcon />
            downloaded videos
          </div>
          <div id='KeyboardArrowDownSharpIcon'>
            <KeyboardArrowDownSharpIcon /> show
          </div>
          <br />
          <div id='Breakline'></div>

          {/* -----------second column--------------- */}

          {/* -------------------------------------------------------- */}

{/*           
          <div id='KeyboardArrowRightSharpIcon'>
            you
            <KeyboardArrowRightSharpIcon />
          </div>
          <div id='PortraitSharpIcon'>
            <PortraitSharpIcon /> your channel
          </div>
          <div id='RestoreSharpIcon'>
            <RestoreSharpIcon />watched videos
          </div>
          <div id='SlideshowSharpIcon'>
            <SlideshowSharpIcon />your videos
          </div>
          <div id='AccessTimeIcon'>
            <AccessTimeIcon />see later
          </div>
          <div id='DownloadIcon'>
            <DownloadIcon />
            downloaded videos
          </div>
          <div id='KeyboardArrowDownSharpIcon'>
            <KeyboardArrowDownSharpIcon /> show
          </div>
          <br />
          <div id='Breakline'></div> */}
          {/* -------------------------------------------------------- */}
        </div>
      </div>
    </>
  )
}
