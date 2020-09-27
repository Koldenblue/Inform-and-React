import React from "react";

function EdmundPettus() {
  let styles = {
    before: {
      "width": "254px"
    }
  }

  return (
    // <div>
    //   <img src={require('../assets/EdmundPettusA.jpg')}></img>
    // </div>
    <section id="hero">
      <div className="before-after-component" id="beforeAfter">
        <div className="after">
          <img src={require("../assets/EdmundPettusB.jpg")} alt="1960 Edmund Pettus Bridge" />
        </div>
        <div className="before" style={styles.before}>
          <img src={require("../assets/EdmundPettusA.jpg")} alt="2020 Edmund Pettus Bridge" />
        </div>
      </div>
      <div className="hero-container" data-aos="fade-up">
        <h1>Welcome to React and Inform</h1>
        <h2>We are a one stop resource for all of your voter information needs</h2>
        <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
      </div>
    </section>
  )
}

export default EdmundPettus;


