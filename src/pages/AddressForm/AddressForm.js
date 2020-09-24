import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from "../../components/AlertBox/AlertBox.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addressForm.css";


function AddressForm() {
  // state hooks
  const [homeAddress, setHomeAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [homeState, setHomeState] = useState("State");
  const [message, setMessage] = useState("");

  // logs the input values as they are being typed (onChange)
  useEffect(() => {
    console.log("loaded")
    console.log(homeAddress)
    console.log(zip)
    console.log(city)
    setMessage("")
  }, [homeAddress, zip, city, homeState]);

  // store the address in local storage upon submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // can change the alert to some sort of error box later
    if (homeAddress === '' || city === '' || zip === '' || homeState === 'State') {
      setMessage("You must fill out all fields!")
    }
    else {
      localStorage.setItem("myAddress", JSON.stringify({ homeAddress, city, zip, homeState }));
    }
    console.log("hi");
  }

  return (
    <div className='row'>
      <Form className='col-md-12'>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(event) => setHomeAddress(event.target.value)}
            type="text" placeholder="Enter Home Address" />
          <Form.Text className="text-muted">
            Your home address for figuring out vote stuff
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(event) => setCity(event.target.value)}
            type="text" placeholder="Enter City" />
        </Form.Group>

        <Form.Group controlId="formZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            onChange={(event) => setZip(event.target.value)}
            type="text" placeholder="Enter Zip" />
        </Form.Group>

        <Form.Group controlId="form.controlState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={(event) => setHomeState(event.target.value)}>
              <option selected>State</option>
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
          </Form.Control>
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

export default AddressForm;
