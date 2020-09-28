
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
    }
  }

  const handleResize = (e) => {
    console.log(e.screenX);
    document.getElementById("overlay").style.width = `${e.screenX}px`
  }

  return (

    <section id="hero" style={{width: "100vw"}} onMouseMove={handleResize}>
        <div id="overlay" style={styles.after}>
        </div>
        <div className="before" style={styles.before}>
        </div>
    </section>
  )
}

export default EdmundPettus;


