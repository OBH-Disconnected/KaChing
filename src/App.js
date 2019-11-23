import React, { Component } from 'react';
import Login from "./components/Login"
import Main from "./components/Main";
import About from "./components/About"
import Users from "./components/Users"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar} from "react-bootstrap"
import "./App.css";

import { FaHome,FaHandHoldingUsd,FaChartLine,FaCreditCard} from 'react-icons/fa';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      showMapa:false,
      subs:false,
      przelew:false,
    };
  }
  loginUser = () =>{
    this.setState({logged:true})
  }
  render() {
    return (
      this.state.logged ?
      <Router>
      <div>
      <Navbar bg="light" variant="light" className="main-nav">
              <Link to="/" className="nav-link navigation-item"><h1><FaHome/></h1>Home</Link>
              <Link to="/about" className="nav-link navigation-item"><h1><FaHandHoldingUsd/></h1>Goals</Link>
              <Link to="/users"  className="nav-link navigation-item"><h1><FaChartLine/></h1>Results</Link>
              <Link to="/transactions"  className="nav-link navigation-item"><h1><FaCreditCard/></h1>Transactions</Link>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Main />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
      :
      <Login login={this.loginUser}/>
    );
  }
}

export default App;

