import React, { Component } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state={
      login:"",
      password:""
    }
  }
  changeLogin = (event) =>{
    this.setState({login: event.target.value})
  }
  changePassword = (event) =>{
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.state.login === "admin" && this.state.password==="admin"?
    this.props.login()
    :
    console.log("nie")
  }
  render() {
    return (
      <div className='background'>
        <div className='tile'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" placeholder="Enter login" value={this.state.login} onChange={this.changeLogin} required />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.changePassword} required />
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
