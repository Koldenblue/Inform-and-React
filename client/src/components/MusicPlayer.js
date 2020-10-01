import React from 'react';

function MusicPlayer() {
  let styles = {
    audio: {
      'backgroundColor': 'red',
      'padding': '20px'
    }
  }
  return (
    <audio src={require('../assets/AnthemWithVoice.mp3')} autoPlay controls>
      Error: your web browser does not support this audio player.
    </audio>
  )
}

export default MusicPlayer;