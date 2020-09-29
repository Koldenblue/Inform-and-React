
import React from "react";
import bgUnder from "../assets/EdmundPettusB.jpg";
import bgOver from "../assets/EdmundPettusA.jpg";

function EdmundPettus() {
const styles = {
    before: {
      width: "100%",
      zIndex: 4,
      position: "absolute",
      height: "100%",
      backgroundImage: `url(${bgUnder})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    },
    after: {
      position: "absolute",
      zIndex: 5,
      height: "100%",
      maxWidth: "100%",
      backgroundImage: `url(${bgOver})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    hero: {
      position: "absolute",
      zIndex: 10,
      height: "100%",
      maxWidth: "100%"
    }
  }

  const handleResize = (e) => {
    const xPos = e.clientX + 16
    // console.log(xPos);
    // console.log(window.innerWidth)
    document.getElementById("overlay").style.width = `${xPos}px`
  }


  return (

    <section id="hero" style={{width: "100vw"}} onMouseMove={handleResize}>
        <div id="overlay" style={styles.after}>
        </div>
        <div className="hero-container" style={styles.hero} data-aos="fade-up">
        <h1>Welcome to Inform and React</h1>
        <h2>We are a one stop resource for all of your voter information needs.</h2>
        <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
      </div>
        <div className="before" style={styles.before}>
        </div>
        
    </section>
  )
}

export default EdmundPettus;


