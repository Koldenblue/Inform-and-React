import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";


function Posters() {
  const [bring, setBring] = useState('none');
  const [bringOpacity, setBringOpacity] = useState(1)
  const [check, setCheck] = useState('none');
  const [checkOpacity, setCheckOpacity] = useState(1)
  const [nevada, setNevada] = useState('none');
  const [nevadaOpacity, setNevadaOpacity] = useState(1)


  let styles = {
    containerDiv: {
      marginTop: '2em',
      marginBottom: '2em',
    },
    bringImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '0px',
      left: '50%',
      height: '100%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: bring,
      transition: 'opacity 1s',
      opacity: bringOpacity
    },
    checkImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '0px',
      left: '50%',
      height: '100%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: check,
      transition: 'opacity 1s',
      opacity: checkOpacity
    },
    nevadaImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '0px',
      left: '50%',
      height: '100%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: nevada,
      transition: 'opacity 1s',
      opacity: nevadaOpacity
    }

  }

  //================ bring image functions
  let bringZoom = () => {
    setBring('block');
    setTimeout(() => {
      window.addEventListener("click", bringFade)
    }, 100)
  }

  useEffect(() => {
    if (bringOpacity === 0) {
      setBringOpacity(1)
    }
    else {
      setBringOpacity(0)
    }
  }, [bring])

  let bringFade = () => {
    setBring('none');
    window.removeEventListener("click", bringFade);
  }

  //================ check image functions
  let checkZoom = () => {
    setCheck('block');
    setTimeout(() => {
      window.addEventListener("click", checkFade)
    }, 100)
  }

  useEffect(() => {
    if (checkOpacity === 0) {
      setCheckOpacity(1)
    }
    else {
      setCheckOpacity(0)
    }
  }, [check])

  let checkFade = () => {
    setCheck('none');
    window.removeEventListener("click", checkFade);
  }

  //================ nevada image functions
  let nevadaZoom = () => {
    setNevada('block');
    setTimeout(() => {
      window.addEventListener("click", nevadaFade)
    }, 100)
  }

  useEffect(() => {
    if (nevadaOpacity === 0) {
      setNevadaOpacity(1)
    }
    else {
      setNevadaOpacity(0)
    }
  }, [nevada])

  let nevadaFade = () => {
    setNevada('none');
    window.removeEventListener("click", nevadaFade);
  }

  return (
    <>
      <img src={require('../assets/WHATTOBRING.png')} style={styles.bringImg} alt='what to bring' />
      <img src={require('../assets/ELECTIONDAY_CHECKLIST.png')} style={styles.checkImg} alt='election checklist' />
      <img src={require('../assets/NEVADA.png')} style={styles.nevadaImg} alt='nevada stats' />

      <div class='container-fluid' style={styles.containerDiv}>
        <div className='row' >
          <div className='col-md-4'>
            <Image src={require('../assets/WHATTOBRING.png')} className='poster-images' onClick={bringZoom} />
          </div>
          <div className='col-md-4'>
            <Image src={require('../assets/ELECTIONDAY_CHECKLIST.png')} className='poster-images' onClick={checkZoom} />
          </div>
          <div className='col-md-4'>
            <Image src={require('../assets/NEVADA.png')} className='poster-images' onClick={nevadaZoom} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Posters;