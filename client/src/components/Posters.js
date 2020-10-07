import React from "react";
import Image from "react-bootstrap/Image";


function Posters() {
  let styles = {
    posterImages: {
      maxWidth: '100%'
    },
    containerDiv: {
      marginTop: '2em',
      marginBottom: '2em',
    }
  }
  return (
    <div class='container-fluid' style={styles.containerDiv}>
      <div className='row' >
        <div className='col-md-4'>
          <Image src={require('../assets/WHATTOBRING.png')} style={styles.posterImages} />
        </div>
        <div className='col-md-4'>
          <Image src={require('../assets/ELECTIONDAY_CHECKLIST.png')} style={styles.posterImages} />
        </div>
        <div className='col-md-4'>
          <Image src={require('../assets/NEVADA.png')} style={styles.posterImages} />
        </div>
      </div>
    </div>
  )
}

export default Posters;