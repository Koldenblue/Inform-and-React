import React, { useState, useEffect } from "react";
import {Animated} from "react-animated-css";
import 'bootstrap/dist/css/bootstrap.min.css';


// class AlertBox extends React.Component {
//   state = {
//     visible: false,
//     backgroundColor: 'red'
//   }

//   styles = {
//     div: {
//       'borderColor' : 'black',
//       'borderWidth' : '2px',
//       'borderRadius': '5px',
//       'backgroundColor': 'red',
//       'padding': '10px',
//       'color' : 'antiquewhite'
//     }
//   }

//   componentDidUpdate() {
//     this.setState({visible:!this.state.visible})
//   }

//   render() {
//     return(
//     <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.visible}>
//       <div style={this.styles.div}>
//         {this.props.message}
//       </div>
//     </Animated>
//     )
//   }
// }

function AlertBox(props) {
  const [visible, setVisible] = useState(true);
  // background color for the alert box
  const [backgroundColor, setBackgroundColor] = useState("white");


  let styles = {
    div: {
      'borderColor' : 'black',
      'borderWidth' : '2px',
      'borderRadius': '5px',
      'backgroundColor': backgroundColor,
      'padding': '10px',
      'color' : 'antiquewhite'
    }
  }


  // when the message changes, toggle the visible variable so that it fades in and out
  useEffect(() => {
    setVisible(!visible)
    setTimeout(() => {
      setBackgroundColor("red")
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.message]);

  return(
  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={visible}>
    <div style={styles.div}>
      {props.message}
    </div>
  </Animated>
  )
}

export default AlertBox;