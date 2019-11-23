import React, { Component } from 'react';
import Login from "./components/Login"
import Main from "./components/Main";
import About from "./components/About"
import Users from "./components/Users"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"

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
      <Navbar bg="light" variant="light">
              <Link to="/" className="nav-link">Main</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/users"  className="nav-link">Users</Link>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
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

