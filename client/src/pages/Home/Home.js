import React from "react";
const path = require("path")
class Home extends React.Component {
  state = {
    myState: "HOME PAGE COMPONENT STATE"
  }

  render() {
    return (
      <div>
        {this.state.myState}
        {/* <video playsinline autoplay loop muted poster>
          <source src={path.join(__dirname, "../../assets/Usa-5588.mp4") } type="video/mp4" />
        </video> */}
      </div>
    )
  }
}

export default Home;