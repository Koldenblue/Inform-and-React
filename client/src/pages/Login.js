import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from '../components/AlertBox';
import {Redirect} from "react-router-dom"
import axios from 'axios'
import BackgroundVideo from "../pages/BackgroundVideo/BackgroundVideo"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setMessage("Neither username nor password may be blank.")
    }
    else {
      let user = {
          username: username,
          password: password
      }
      axios.post(`/api/login`, user).then((data) => {
        console.log(data);
        window.location.replace("/")
      })
    }
  }

  useEffect(() => {
    if (message !== "") {
      setMessage("");
    }
  }, [username, password])

  return (
    <>
    <BackgroundVideo />

    <div className='container'>
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
    </div>
    </>
  )
}

export default Login;