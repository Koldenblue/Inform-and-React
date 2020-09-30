import React from 'react';
import Moment from 'react-moment';
import "./MomentCountdown.css";
import moment from 'moment';
const util = require("util");


class App extends React.Component {
  state = {
    date: new Date(),
  //   electionDate: '2020-11-03T12:59-0500',
  //   regularElectionDate: new Date(2020, 10, 3),
  //   currentTime: moment(),
  //   daysLeft: '',
  //   hoursLeft: '',
  //   minutesLeft: '',
  //   secondsLeft: '',
  //   diffInTime: '',
  // }

  // styles = {
  //   countdown: {
  //     'borderColor': 'black',
  //     'borderWidth': '5px',
  //     'borderStyle': 'dotted',
  //     'margin': '50px'
  //   } 
  // }

  // asyncSetState = util.promisify(this.setState)
  // tick() {
  //   this.asyncSetState({
  //     diffInTime: moment().diff(this.state.electionDate, 'seconds') * -1
  //   }).then(
  //     setInterval(() => this.setState({
  //       date: new Date(),
  //       diffInTime: moment().diff(this.state.electionDate, 'seconds') * -1,
  //       secondsLeft: Math.floor(this.state.diffInTime % 60),
  //       minutesLeft: Math.floor(this.state.diffInTime / 60 % 60),
  //       hoursLeft: Math.floor(this.state.diffInTime / 3600 % 24),
  //       daysLeft: Math.floor(this.state.diffInTime / 86400)
  //     }), 1000)
  //   )
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
    // console.log(remainingSeconds)
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
        <div className="col-lg-8 mx-auto">
            <div className="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
              <p className="mb-4 font-weight-bold text-uppercase"></p>
              <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                <h2>Today is {this.state.date.toLocaleDateString()}</h2>
                <br></br>
                {/* <p>    There are {this.state.daysLeft} days to election</p> */}
                <span class="h1 font-weight-bold">{this.state.daysLeft}</span>
                {/* <p>   There are {this.state.hoursLeft} hours to election</p> */}
                <span class="h1 font-weight-bold">{this.state.hoursLeft}</span>
                {/* <p>   There are {this.state.minutesLeft} minutes to election</p> */}
                <span class="h1 font-weight-bold">{this.state.minutesLeft}</span>
                {/* <p>   There are {this.state.secondsLeft} seconds to election</p> */}
                <span class="h1 font-weight-bold">{this.state.secondsLeft}</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// 
export default App;


// <div className="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
// <p className="mb-4 font-weight-bold text-uppercase">New year's eve in</p>
// <h2>Today is {this.state.date.toLocaleDateString()}</h2>
// {/* <h2>The election is on {this.state.regularElectionDate.toLocaleDateString()}</h2>
// <h2>The election is on <Moment>{this.state.electionDate}</Moment></h2> */}
// <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
// <p>DAYS LEFT {this.state.daysLeft}</p>
// <p>HOURS {this.state.hoursLeft}</p> 
// <p>Mins {this.state.minutesLeft}</p> 
// <p>Secs {this.state.secondsLeft}</p> 

// {/* <p>There are <Moment diff={this.state.date} unit="days">{this.state.electionDate}</Moment> days to election</p>
// <br></br>
//  <p>There are <Moment diff={this.state.date} unit="hours">{this.state.electionDate}</Moment> hours to election</p>
//  <p>There are <Moment diff={this.state.date} unit="minutes">{this.state.electionDate}</Moment> minutes to election</p>
// <p>There are {<Moment diff={this.state.date} unit="seconds">{this.state.electionDate}</Moment>} seconds to election</p> */}
// </div>
// </div>
// </div>
// </div>
// </div>










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