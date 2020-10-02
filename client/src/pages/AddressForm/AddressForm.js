import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from "../../components/AlertBox.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addressForm.css";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";



function AddressForm({ user, setHasAddress }) {
  // state hooks
  const history = useHistory();
  const [formInput, setFormInput] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  // logs the input values as they are being typed (onChange)

  // store the address in local storage upon submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    // can change the alert to some sort of error box later
      if (!formInput.address || !formInput.city || !formInput.zip || !formInput.state) {
        setErrorMsg("You must fill out all fields!")
      } else {
        localStorage.setItem("myAddress", JSON.stringify(formInput));
        axios.put('api/users/address/' + user._id, formInput).then((data) => {
          console.log("HERE IS THE USER NOW", data)
          console.log("is this even happening?")
          setHasAddress(true)
          window.location.replace("/")
        })
        .catch (err => console.log(err))
      // use location hook instead
      // or get location from history cache
      // these are from react-router-dom
      // history.push("/home");
      // window.location.replace("/home");
    }
  }

    return (
      <div className='container'>
        <div className='row'>

        <Form className='col-md-12'>
          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={({ target: { name, value } }) => setFormInput({ ...formInput, [name]: value })}
              type="text"
              placeholder="Enter Home Address"
              id="formAddress"
              name="address"
            />
            <Form.Text className="text-muted">
              Your home address for figuring out vote stuff
            </Form.Text>
          </Form.Group>

          <Form.Group >
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={({ target: { name, value } }) => setFormInput({ ...formInput, [name]: value })}
              type="text"
              placeholder="Enter City"
              id="formCity"
              name="city"
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>State</Form.Label>
            <Form.Control name="state" as="select" onChange={({ target: { name, value } }) => setFormInput({ ...formInput, [name]: value })}>
              <option defaultValue>State</option>
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

          <Form.Group >
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={({ target: { name, value } }) => setFormInput({ ...formInput, [name]: value })}
              type="text"
              placeholder="Enter Zip"
              id="formZip"
              name="zip"
            />
          </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Record Address
            </Button>

          <AlertBox
            message={errorMsg}
          />
        </Form>
        </div>
      </div>
    )
}

export default AddressForm;
