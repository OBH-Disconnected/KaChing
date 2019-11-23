import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(event.target.value)
    this.props.login();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Login</label><input type="text" name="login" required />
        <label>Password</label><input type="password" name="passw" required />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
