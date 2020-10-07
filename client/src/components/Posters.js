import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";


function Posters() {
  const [zoomA, setZoomA] = useState(false)

  let styles = {
    containerDiv: {
      marginTop: '2em',
      marginBottom: '2em',
    }
  }



  return (
    <div class='container-fluid' style={styles.containerDiv}>
      <div className='row' >
        <div className='col-md-4'>
          <Image src={require('../assets/WHATTOBRING.png')} className='poster-images' />
        </div>
        <div className='col-md-4'>
          <Image src={require('../assets/ELECTIONDAY_CHECKLIST.png')} className='poster-images' />
        </div>
        <div className='col-md-4'>
          <Image src={require('../assets/NEVADA.png')} className='poster-images' />
        </div>
      </div>

    </div>
  )
}

export default Posters;