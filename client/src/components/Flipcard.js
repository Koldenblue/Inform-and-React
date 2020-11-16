import React from "react";
import "./Flipcard.css";

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
          <img src={this.props.photo} className="repPhoto"/>
              
          </div>
          <div className="flip-back">
            <h4>Party: {this.props.party}</h4>
            <h4>State: {this.props.repState}</h4>
            <h6>URL: {this.props.repUrl}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Flipcard;