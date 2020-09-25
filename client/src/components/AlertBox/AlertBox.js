import React, { useState, useEffect } from "react";
import {Animated} from "react-animated-css";
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertBox(props) {
  const [visible, setVisible] = useState(true)

  let styles = {
    div: {
      'borderColor' : 'black',
      'borderWidth' : '2px',
      'borderRadius': '5px',
      'backgroundColor': 'red'
    }
  }

  // when the message changes, toggle the visible variable so that it fades in and out
  useEffect(() => {
    setVisible(!visible)
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