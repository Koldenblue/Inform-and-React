import React from 'react';

function BackgroundVideo() {
  return (
    <div>
      <video playsinline autoPlay loop muted poster id='bg-video'>
        <source src={require('../../assets/Usa-5558.mp4')} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo;