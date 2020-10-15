import React from 'react';

function BackgroundPic() {

  let styles = {
    image: {
      top: '0',
      objectFit: 'cover',
      height: '100%',
      width: '100%',
      margin: '0',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'fixed',
      zIndex: -1
    }
  }

  return (
    <div>
      {/* <img src={require('../assets/baner-bg.jpg')} style={styles.image} /> */}
    </div >
  )
}

export default BackgroundPic;