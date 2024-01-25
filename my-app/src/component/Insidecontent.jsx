import React, { useState, useEffect } from 'react'
import "./Insidecontent.css"
import VideoCard from './VideoCard';

export default function Insidecontent({ Input }) {


  let [Data, setData] = useState([]);

  useEffect(() => {

    // alert(searchQuery)
    async function fetchData() {
      let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${Input}&key=AIzaSyBkqq6AfYW1DceuTnUTiiir7hubaK0ytzs`)
      data = await data.json();
      // console.log(data.items)
      setData(data.items);
    }

    fetchData();

  }, [Input]);


  return (
    <span id='contentBox'>


      {

        Data.map((e) =>
        (

          <VideoCard id={e.id.videoId} channelTitle={e.snippet.channelTitle} thumbnailIcon={e.snippet.thumbnails.default.url} thumbnail={e.snippet.thumbnails.high.url} title={e.snippet.title} description={e.snippet.description} />
        )
        )
      }


    </span>
  )
}
