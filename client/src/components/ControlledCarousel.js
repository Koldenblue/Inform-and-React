import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Import wrap carousel master js and wrap carousel css file here?


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <h1 className='section-header'> VOTING IN ACTION </h1>
      {/* <CoinSlider/> */}
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {/* Carousel Slide */}
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://www.rd.com/wp-content/uploads/2018/05/shutterstock_643761688.jpg"
            alt="American Flag in Sunshine"
          />

          <Carousel.Caption>
            <h3>America The Beautiful</h3>
            <p>With Liberty and Justice For All</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Carousel Slide */}


        {/* Carousel Slide */}
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://s.abcnews.com/images/US/georgia-voting-lines-01-gty-jef-200618_1592507350991_hpMain_4x3_992.jpg"
            alt="Voters Standing in Line"
          />

          <Carousel.Caption>
            <h3>Citizens exercising their right to vote in the primaries.</h3>
            <p>Georgia</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Carousel Slide */}

        {/* Carousel Slide */}
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://www.whenweallvote.org/wp-content/uploads/2020/02/DSC09571-2000x1250-c-default.jpg"
            alt="When We All Vote"
          />

          <Carousel.Caption>
            <h3>When We All Vote</h3>
            <p>When we all vote, we have the chance to make our voice heard.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Carousel Slide */}

        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://www.telegraph.co.uk/content/dam/politics/2019/04/15/TELEMMGLPICT000193184700_trans%2B%2BsXJ4x1hHApqw7ff8y1ZSzRjHQHP1QiyRBs68jGZGuWw.jpeg"
            alt="Polling Place Signage"
          />
          <Carousel.Caption>
            <h3>Where To Find Your Polling Place</h3>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Slide */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/ARIZONA.png")}
            alt="Arizona Statistics"
          /> */}

          {/* <Carousel.Caption> */}
            {/* <h3>Your Ballot, Your Choice</h3>
            <p>Voters exercising their right to vote in the primaries.</p> */}
          {/* </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* Carousel Slide */}

        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://i0.wp.com/levittownnow.com/wp-content/uploads/2020/06/102568336_1914722925336202_4349420699559919616_o.jpg"
            alt="The White House"
          />
          <Carousel.Caption>
            <h3>Your Vote Counts!</h3>
            <p>Democracy In Action</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://energyfuse.org/wp-content/uploads/2016/02/democracy-in-action.jpg"
            alt="Voters at the polls"
          />
          <Carousel.Caption>
            <h3>Exercise Your Right To Vote</h3>
            <p>Ready, Set, Vote!</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Slide */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/ELECTIONDAY_CHECKLIST.png")}
            alt="Voter Checklist"
          /> */}

          {/* <Carousel.Caption> */}
            {/* <h3>What To Bring</h3>
            <p>Be Prepared.</p> */}
          {/* </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* Carousel Slide */}

        {/* Carousel Slide */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/NORTHCAROLINA.png")}
            alt="Voter Info"
          /> */}

          {/* <Carousel.Caption> */}
            {/* <h3>What To Bring</h3>
            <p>Be Prepared.</p> */}
          {/* </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* Carousel Slide */}


        {/* Carousel Slide */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../assets/WHATTOBRING.png")}
            alt="Voter Checklist"
          /> */}

          {/* <Carousel.Caption> */}
            {/* <h3>What To Bring</h3>
            <p>Be Prepared.</p> */}
          {/* </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* Carousel Slide */}

        {/* Carousel Slide */}
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://i.redd.it/a9njyodm9c751.jpg"
            alt="The White House"
          />

          <Carousel.Caption>
            {/* <h3>What To Bring</h3>
            <p>Be Prepared.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Carousel Slide */}

        {/* Carousel Slide */}
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190729150349-washington-monument-dc.jpg"
            alt="The Washington Monument"
          />

          <Carousel.Caption>
            {/* <h3>What To Bring</h3>
            <p>Be Prepared.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Carousel Slide */}

      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
