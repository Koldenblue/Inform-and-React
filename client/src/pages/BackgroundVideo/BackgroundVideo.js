import React from 'react';

function BackgroundVideo() {
  let styles = {
    bgVideo: {
      'position': 'fixed',
      'object-fit': 'cover',
      'top':'0',
      'width': '100vw',
      'height': '100vh',
      'margin': '0',
      'z-index': -'1'
    }
  }
  return (
    <div>
      <video playsinline autoPlay loop muted poster style={styles.bgVideo}>
        <source src={require('../../assets/Usa-5558_Trim.mp4')} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo;