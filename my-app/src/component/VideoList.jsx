// VideoList.js
import React, { useState } from 'react';
import VideoCard from './VideoCard';

export default function VideoList({ videos }) {
  const [currentVideo, setCurrentVideo] = useState(null);

  const playVideo = (videoId) => {
    setCurrentVideo(videoId);
  };

  const stopVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          playVideo={playVideo}  // Use lowercase playVideo
          // isPlaying={currentVideo === video.id}
          // stopVideo={stopVideo}
        />
      ))}
    </div>
  );
}
