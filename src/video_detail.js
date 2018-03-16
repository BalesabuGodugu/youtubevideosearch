import React from 'react';

const VideoDetails=({video})=>{
 if(!video){
   return <div>laoding ...</div>;
 }
  const videoid=video.id.videoId;
  const videoURL=`https://youtube.com/embed/${videoid}`;
  return (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoURL}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>

        </div>

    </div>
  )
}

export default VideoDetails;