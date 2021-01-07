import React, { useState } from "react";
import Form from "react-bootstrap/Form";


export default function Login() {
  const [email, setEmail] = useState("");

  function validateForm() {
    return email.length > 0 ;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <div className="form-div">
        <img className="img-logo" src="https://green.cdn.energy/branding/logo-r.svg" />
        <h4>Example login screen</h4>
        <p>Get started with Green.</p>
        <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <lable>Email Address</lable>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="check-box"><input type="checkbox"/> Remember this device</div>
        </Form.Group>
        <button  className="btn-style" type="submit" OnClick={validateForm()}>
          Sign In
        </button>
      </Form>
        </div>
    </div>
  );
}