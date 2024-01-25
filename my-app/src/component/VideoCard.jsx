// VideoCard.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



export default function VideoCard({ id, thumbnail, title ,thumbnailIcon,channelTitle}) {

  const [isVideoPlayerOpen, setisVideoPlayerOpen] = useState(false);

  const handlePlayVideo = () => {
    setisVideoPlayerOpen(true);
  }

  return (
    <div id='content' onClick={handlePlayVideo}>
      {isVideoPlayerOpen ? (
        <div className="video-wrapper">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            playing={true}
            width="100%"
            height="100%"

          />
        </div>
      ) : (
        <>
          <img id='thumbnail' src={thumbnail} alt="" />
          <img id='thumbnailIcon' src={thumbnailIcon} alt="" />
          <p>{title}</p>
          <h5>{channelTitle}<CheckCircleIcon id='channelName'/></h5>
        </>
      )}
    </div>
  );
}
