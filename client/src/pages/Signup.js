import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from '../components/AlertBox';
import axios from 'axios'

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Neither username nor password may be blank.");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    
      //find one where data === username entered and if not found, create new user
      // check to see if user is already in database?
      // passport routes?
      let user = {
        username: username,
        password: password
      }
      axios.post('api/users', user)
    }


  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password])

  return (
    <div className='row'>

      <Form className='col-md-12'>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name='username'
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder=""
            id="username"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
            name='password'
            id="password"
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>

        <AlertBox
          message={message}
        />
      </Form>
    </div>
  )
}

export default Signup;