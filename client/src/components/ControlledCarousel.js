import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h1> On The Ground </h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.cnn.com/cnnnext/dam/assets/200618114216-02-mail-in-ballots-exlarge-169.jpg"
          alt="Ballot sorting with gloves"
        />
        <Carousel.Caption>
          <h3>Your Ballot, Your Choice</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sires.house.gov/sites/sires.house.gov/files/featured_image/United-States-Capitol-Building-in-Washington-DC_1.jpg"
          alt="U.S. Capitol Building at Night"
        />

        <Carousel.Caption>
          <h3>The U.S. Capitol</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.redd.it/a9njyodm9c751.jpg"
          alt="The White House"
        />

        <Carousel.Caption>
          <h3>The White House</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>

  );
}

export default ControlledCarousel;