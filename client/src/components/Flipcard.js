import React from "react";

class Flipcard extends React.Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-front">

              {this.props.children[0]}
          </div>
          <div className="flip-back">
            {this.props.children[1]}

            <button type='button' className="burger-devour-btn btn btn-info float-right" id='devour-btn-{{id}}' data-value='{{id}}'>
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