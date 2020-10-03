
import React from "react";
import bgUnder from "../assets/EdmundPettusB.jpg";
import bgOver from "../assets/EdmundPettusA.jpg";
import {Animated} from "react-animated-css";
import './EdmundPettus.css';


function EdmundPettus() {


const styles = {
    before: {
      width: "1920px",
      zIndex: 4,
      position: "absolute",
      height: "1080px",
      backgroundImage: `url(${bgUnder})`,
      backgroundSize: "cover",

      backgroundRepeat: "no-repeat"
    },
    after: {
      position: "absolute",
      zIndex: 5,
      height: "1080px",
      maxWidth: "1920px",
      backgroundImage: `url(${bgOver})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    hero: {
      position: "absolute",
      zIndex: 10,
      height: "100%",
      maxWidth: "100%"
    },
    inlineAnimated: {
      'display': 'inline-block'
    }
  }

  const handleResize = (e) => {
    let xPos;
    // console.log(xPos);
    console.log(window.innerWidth)
    if (window.innerWidth < 1920) {
      // if window is smaller than 1920px, normalizing to 1920px.
      // or else the effect won't work when scrolled right,
      // since the max amount of resize will only be equal to the innerwidth size,
      // while the max picture size is always 1920px
      xPos = (((e.clientX) / (window.innerWidth)) * 1920) + 16
    }
    else {
      xPos = e.clientX + 16;
    }
    document.getElementById("overlay").style.width = `${xPos}px`
  }

  return (
    <>
    <div id="hero" style={{width: "100vw"}} onMouseMove={handleResize}>
        <div id="overlay" style={styles.after}>
        </div>
        <div className="hero-container" style={styles.hero} data-aos="fade-up">
        <h1>
        <Animated animationIn="fadeIn" animationInDelay={1000} animationInDuration={3000} animationOut="fadeOut" isVisible={true}>
          Welcome
        </Animated>
        <Animated animationIn="fadeInLeft" animationInDelay={2000} animationInDuration={3000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
          Inform &nbsp;
        </Animated>
        <Animated animationIn="fadeInUp" animationInDelay={2000} animationInDuration={3000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
          and &nbsp;
        </Animated>
        <Animated animationIn="fadeInRight" animationInDelay={2000} animationInDuration={3000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
          React &nbsp;
        </Animated>
        </h1>
        <h2>
          <Animated animationIn="fadeIn" animationInDelay={3500} animationInDuration={3000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
            We are a one stop resource for all of your voter information needs.
          </Animated>
        </h2>

        {/* removed scrollto class from the button, in order to make scrolling work */}
        <a href="#clock-b" className="btn-get-started "><i className="bx bx-chevrons-down"></i></a>

      </div>
        <div className="before" style={styles.before}>
      </div>

    </div>
    <div className='hero-bar'></div>
    </>
  
  )
}

export default EdmundPettus;


