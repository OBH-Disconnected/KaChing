import React, { Component } from 'react';
import Login from "./components/Login"
import Main from "./components/Main"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }
  loginUser = () =>{
    this.setState({logged:true})
  }
  render() {
    return (
      this.state.logged ?
      <Main />
      :
      <Login login={this.loginUser}/>
    );
  }
}

export default App;

