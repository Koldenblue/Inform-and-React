import React from 'react';

class Countdown extends React.Component {
  state = {
    date: new Date(),
    electionDate: new Date(2020, 10, 3)
  }

  numDaysLeft = () => {
    return this.state.date.toLocaleDateString() - this.state.electionDate.toLocaleDateString();
  }

  render() {
    return(
      <div>
        <h1>It is now {this.state.date.toLocaleTimeString()}</h1>
        <h2>Today is {this.state.date.toLocaleDateString()}</h2>
        <h2>The election is on {this.state.electionDate.toLocaleDateString()}</h2>
        <p>there are {this.numDaysLeft} days to election</p> 
      </div>
    )
  }
}

export default Countdown;