import React from 'react';
import Moment from 'react-moment';

class MomentCountdown extends React.Component {
  state = {
    date: new Date(),
    electionDate: '2020-11-03T12:59-0500',
    regularElectionDate:  new Date(2020, 10, 3)
  }


  styles = {
    countdown: {
      'borderColor': 'black',
      'borderWidth': '5px',
      'borderStyle': 'dotted',
      'margin': '50px'
    } 
  }

  tick() {
    setInterval(() => this.setState({date: new Date()}), 1000)
  }

  componentDidMount() {
    this.tick();
  }

  render() {
    return(
      <div style={this.styles.countdown}>
        <h1> MOMENT DATES</h1>
        <h1>It is now <Moment>{this.state.date}</Moment></h1>
        <h2>Today is {this.state.date.toLocaleDateString()}</h2>
        <h2>The election is on {this.state.regularElectionDate.toLocaleDateString()}</h2>
        <h2>The election is on <Moment>{this.state.electionDate}</Moment></h2>
        <p>There are <Moment diff={this.state.date} unit="days">{this.state.electionDate}</Moment> days to election</p>
        <p>There are <Moment diff={this.state.date} unit="hours">{this.state.electionDate}</Moment> hours to election</p>
        <p>There are <Moment diff={this.state.date} unit="minutes">{this.state.electionDate}</Moment> minutes to election</p>
        <p>There are <Moment diff={this.state.date} unit="seconds">{this.state.electionDate}</Moment> seconds to election</p>
      </div>
    )
  }
}

export default MomentCountdown;