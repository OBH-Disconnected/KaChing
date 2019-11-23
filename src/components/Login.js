import React, { Component } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.props.login();
  }
  render() {
    return (
      <div className='background'>
        <div className='tile'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" placeholder="Enter login" required />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
  </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
