import React from 'react';
import Moment from 'react-moment';
import "./MomentCountdown.css";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCube} from 'swiper';
import "./swiper.css";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([EffectCube]);

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
  }
},1000)
// var countdownTimer = setInterval(this.tick(), 1000);
  }
  componentDidMount() {
    this.tick();
    this.initializeSwiper();
  }

  initializeSwiper(){
    const swiper = new SwiperCore('.swiper-container', {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
  }

  render() {
    return (
      <div className="py-5">
        <div className="row">
  
            {/* <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style={{backgroundImage:`url(https://swiperjs.com/demos/images/nature-1.jpg)`}}></div>
      <div class="swiper-slide" style={{backgroundImage:`url(https://swiperjs.com/demos/images/nature-2.jpg)`}}></div>
      <div class="swiper-slide" style={{backgroundImage:`url(https://swiperjs.com/demos/images/nature-3.jpg)`}}></div>
      <div class="swiper-slide" style={{backgroundImage:`url(https://swiperjs.com/demos/images/nature-4.jpg)`}}></div>
      <div class="swiper-slide" style={{backgroundImage:`url(https://swiperjs.com/demos/images/nature-5.jpg)`}}></div>
    </div>
  </div> */}
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

          {/* <div className="col-lg-2 mx-auto" id="chrisRockVideo">
          <iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}

          {/* <div className="col-lg-2 mx-auto" id="chrisRockVideo">
          <iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div> */}
</div>
        <Swiper
        effect= "cube"
      spaceBetween={0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="540" height="315" src="https://www.youtube.com/embed/AHrZWg3Z-as" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      ...
    </Swiper>
      </div>
    )
  }
}
// 
export default App;






