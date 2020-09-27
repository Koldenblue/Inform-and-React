import React from "react";
const path = require("path")


class Home extends React.Component {
  state = {
    myState: "this is the state of the home component"
  }

  render() {
    return (
      <div>
        {this.state.myState}
      </div>
    )
  }
}

export default Home;