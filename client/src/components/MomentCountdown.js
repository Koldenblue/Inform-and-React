import React from 'react';
import Moment from 'react-moment';
import "./MomentCountdown.css";


class App extends React.Component {
  state = {
    date: new Date(),
    electionDate: new Date('2020-11-03 12:59:00'),
    regularElectionDate:  new Date(2020, 10, 3),
    daysLeft:0,
    hoursLeft:0,
    minutesLeft:0,
    secondsLeft:0
  }
  // styles = {
  //   countdown: {
  //     'borderColor': 'black',
  //     'borderWidth': '5px',
  //     'borderStyle': 'dotted',
  //     'margin': '50px'
  //   } ,
  //   p:{
  //     color:"black"
  //   }
  // }
  tick() {
    // this.setState({date: new Date()})
    setInterval(() => {
      this.setState({date: new Date()})
    var upgradeTime = Math.abs(this.state.electionDate - this.state.date)/1000;
var seconds = upgradeTime;
  var days        = Math.floor(seconds/24/60/60);
  this.setState({daysLeft:days})
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  this.setState({hoursLeft:hours})
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  this.setState({minutesLeft:minutes})
  var remainingSeconds = Math.floor(seconds % 60);
  this.setState({secondsLeft:remainingSeconds})
  // function pad(n) {
  //   return (n < 10 ? "0" + n : n);
  // }
  if (seconds == 0) {
    // clearInterval(countdownTimer);
  } else {
    seconds--;
    console.log(remainingSeconds)
  }
},1000)
// var countdownTimer = setInterval(this.tick(), 1000);
  }
  componentDidMount() {
    this.tick();
  }
  render() {
    return (
      <div className="py-5">
        <div className="row">
            <div className="col-lg-2 mx-auto" id="hamiltonVideo">
            <iframe width="540" height="315" src="https://www.youtube.com/embed/YMmkXAIRXCU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>       
          <div className="col-lg-8 mx-auto" style={{paddingTop: "50px"}}>
            <div className="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
            <small className="timeUnit" id="dayUnit">DAYS</small>
            <small className="timeUnit" id="hourUnit">HOURS</small>
            <small className="timeUnit"id="minuteUnit">MINUTES</small>
            <small className="timeUnit"id="secondUnit">SECONDS</small>
              <p className="mb-4 font-weight-bolder text-uppercase"></p>
              {/* <h2>Today is {this.state.date.toLocaleDateString()}</h2> */}
              <h2> TIME UNTIL THE ELECTION: </h2>
              <div id="clock-b" className="countdown-circles d-flex flex-wrap pt-4">
                <br></br>
                {/* <p>    There are {this.state.daysLeft} days to election</p> */}
                <span className="h1 font-weight-bold">{this.state.daysLeft} </span>
                {/* <p>   There are {this.state.hoursLeft} hours to election</p> */}
                <span className="h1 font-weight-bold">{this.state.hoursLeft} </span>
                {/* <p>   There are {this.state.minutesLeft} minutes to election</p> */}
                <span className="h1 font-weight-bold">{this.state.minutesLeft} </span>
                {/* <p>   There are {this.state.secondsLeft} seconds to election</p> */}
                <span className="h1 font-weight-bold">{this.state.secondsLeft} </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 mx-auto" id="chrisRockVideo">
          <iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
// 
export default App;






// class MomentCountdown extends React.Component {
//   state = {
//     date: new Date(),
//     electionDate: '2020-11-03T12:59-0500',
//     regularElectionDate:  new Date(2020, 10, 3)
//   }


//   styles = {
//     countdown: {
//       'borderColor': 'black',
//       'borderWidth': '5px',
//       'borderStyle': 'dotted',
//       'margin': '50px'
//     } 
//   }

//   tick() {
//     setInterval(() => this.setState({date: new Date()}), 1000)
//   }

//   componentDidMount() {
//     this.tick();
//   }

//   render() {
//     return(
//       // <div className='ameritron' style={this.styles.countdown}>
//       //   <h1> MOMENT DATES</h1>
//       //   <h1>It is now <Moment>{this.state.date}</Moment></h1>
//       //   <h2>Today is {this.state.date.toLocaleDateString()}</h2>
//       //   <h2>The election is on {this.state.regularElectionDate.toLocaleDateString()}</h2>
//       //   <h2>The election is on <Moment>{this.state.electionDate}</Moment></h2>
//       //   <p>There are <Moment diff={this.state.date} unit="days">{this.state.electionDate}</Moment> days to election</p>
//       //   <p>There are <Moment diff={this.state.date} unit="hours">{this.state.electionDate}</Moment> hours to election</p>
//       //   <p>There are <Moment diff={this.state.date} unit="minutes">{this.state.electionDate}</Moment> minutes to election</p>
//       //   <p>There are <Moment diff={this.state.date} unit="seconds">{this.state.electionDate}</Moment> seconds to election</p>
//       // </div>
//       <div className="py-5">
//       <div className="row">
//           <div className="col-lg-8 mx-auto">
//         <div className="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
//         <p className="mb-4 font-weight-bold text-uppercase">New year's eve in</p>
//         <h2>Today is {this.state.date.toLocaleDateString()}</h2>
//         {/* <h2>The election is on {this.state.regularElectionDate.toLocaleDateString()}</h2>
//         <h2>The election is on <Moment>{this.state.electionDate}</Moment></h2> */}
//         <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
//         <p>There are <Moment diff={this.state.date} unit="days">{this.state.electionDate}</Moment> days to election</p>
//         <br></br>
//          <p>There are <Moment diff={this.state.date} unit="hours">{this.state.electionDate}</Moment> hours to election</p>
//          <p>There are <Moment diff={this.state.date} unit="minutes">{this.state.electionDate}</Moment> minutes to election</p>
//          <p>There are <Moment diff={this.state.date} unit="seconds">{this.state.electionDate}</Moment> seconds to election</p>
//         </div>
//     </div>
//     </div>
//     </div>
// </div>

//     )
//   }
// }

// export default MomentCountdown;