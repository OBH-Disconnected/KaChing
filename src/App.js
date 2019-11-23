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
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

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

