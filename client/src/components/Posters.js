import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import ZoomFadeIn from '../components/ZoomFadeIn/ZoomFadeIn';
import ZoomFadeContext from '../components/ZoomFadeIn/ZoomFadeContext';

function Posters() {
  const [currentlyZoomed, setCurrentlyZoomed] = useState(false);


  let styles = {
    containerDiv: {
      marginTop: '2em',
      marginBottom: '2em',
    }
  }

  return (
    <>

      <ZoomFadeContext.Provider value={{ currentlyZoomed, setCurrentlyZoomed }}>

        <div class='container-fluid' style={styles.containerDiv}>
          <div className='row' >
            <div className='col-md-4'>
              <ZoomFadeIn>
                <Image src={require('../assets/WHATTOBRING.png')} className='poster-images' alt='what to bring' />
              </ZoomFadeIn>
            </div>
            <div className='col-md-4'>
              <ZoomFadeIn>
                <Image src={require('../assets/ELECTIONDAY_CHECKLIST.png')} className='poster-images' alt='election checklist' />
              </ZoomFadeIn>
            </div>
            <div className='col-md-4'>
              <ZoomFadeIn>
                <Image src={require('../assets/NEVADA.png')} className='poster-images' alt='nevada stats' />
              </ZoomFadeIn>
            </div>
          </div>

        </div>
      </ZoomFadeContext.Provider>

    </>
  )
}

export default Posters;