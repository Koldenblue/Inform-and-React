import React from "react";

class Flipcard extends React.Component {
  constructor(props){
    
    super(props);

  }
  
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-front">
          <h2>{this.props.name}</h2>
          <img src={this.props.photo} />
              
          </div>
          <div className="flip-back">
            {this.props.children}

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