import React from "react";

class Flipcard extends React.Component {
  render() {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-front">
              a card
          </div>
          <div class="flip-back">
            <button type='button' class="burger-devour-btn btn btn-info float-right" id='devour-btn-{{id}}' data-value='{{id}}'>
              Press this button!
            </button>
              sick flips
          </div>
        </div>
      </div>
    )
  }
}

export default Flipcard;