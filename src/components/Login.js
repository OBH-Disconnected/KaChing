import React, { Component } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import * as net from '../Net';

class Login extends Component {
  constructor() {
    super();
    this.state={
      login:"",
      password:"",
      warning:""
    }
  }
  changeLogin = (event) =>{
    this.setState({login: event.target.value})
  }
  changePassword = (event) =>{
    this.setState({password: event.target.value})
  }
  showWarning = ()=>{
    this.setState({login:"",password:"",warning:"invalid credentials"})
  }
  handleSubmit = async(event) => {
    event.preventDefault()
    var credentials= await net.loginUser(this.state.login,this.state.password)
    credentials ?
    this.props.login()
    :
    this.showWarning()
  }
  render() {
    return (
      <div className='background'>
      <div className="loginContainer">
      <h1 className="loginTitle">KaChing</h1>
        <div  className='tile'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control className="login-input" type="text" placeholder="Enter login" value={this.state.login} onChange={this.changeLogin} required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.changePassword} required />
            </Form.Group>
            <p className="text-danger">{this.state.warning}</p>
            <Button className="loginbtn" type="submit">
              Log In
            </Button>
          </Form>
        </div>
        </div>
      </div>
    );
  }
}
export default Login;
