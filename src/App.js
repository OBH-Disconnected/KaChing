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

  render() {
    return (
      this.state.logged ?
      <Main />
      :
      <Login />
    );
  }
}

export default App;

