import React,{Component} from 'react';
import VideoListItems from './video_list_item';

const VideoList =(props)=>{
  const Videot=  props.videos.map(video => {
      return( <VideoListItems  
        onVideoSelect={props.onVideoSelect}
      video={video}
      key={video.etag}
      />
      );
      
    })

  return(
    <ul className="col-md-4 list-group">

        {Videot}
    </ul>
  )
}

export default VideoList;