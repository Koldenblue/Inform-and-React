import React from "react";

class Home extends React.Component {
  state = {
    myState: "empty component"
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