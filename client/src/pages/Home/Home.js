import React from "react";

class Home extends React.Component {
  state = {
    myState: "HOME COMPONENT"
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