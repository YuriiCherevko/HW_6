import React from "react";
import Home from "./list/Home";
import Contacts from "./list/Contacts";
import About from "./list/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Router>
  );
}

export default App;
