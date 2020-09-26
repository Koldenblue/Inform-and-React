import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'

function WholeJumbotron() {
  return (
    <Jumbotron fluid className='ameritron'>
      <Container>
        <h1>AMERICA</h1>
        <p>
          This is a modified America that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
  )
}

export default WholeJumbotron;