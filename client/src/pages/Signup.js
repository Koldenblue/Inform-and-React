import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from '../components/AlertBox';
import axios from 'axios';
import {Redirect} from "react-router-dom"
import BackgroundVideo from "./BackgroundVideo/BackgroundVideo";


function Signup({ loading, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let addressForm;

  let handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setMessage("Neither username nor password may be blank.")
    }
    else {
      axios.get(`/api/users`).then((data) => {
        let user = {
          username: username,
          password: password
        }

        axios.post('api/users', user).then(data => {
          if (data.data === "That username already exists!") {
            setMessage(data.data)
          } else {
            window.location.href='/login';
          }
        })
      })
    }
  }

  let goToLogin = (event) => {
    event.preventDefault();
    window.location.replace("/login")
  }

  useEffect(() => {
    if (message !== "") {
      setMessage("");
    }
  }, [username, password])

  return ((user && !loading) ? <Redirect to="/home"/> :
    <div className='row'>

      <Form className='col-md-6'>

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
          Sign up
        </Button>
        <Button onClick={goToLogin} variant="primary" type="submit">
          Go to Log In Form
        </Button>
        <AlertBox
          message={message}
        />
      </Form>
    </div>
  )
}

export default Signup;