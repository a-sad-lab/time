import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Form from "../components/Form";

import React, { Component } from "react";

export default class Record extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/record">Record Home</Link>
            </li>
            <li>
              <Link to="/record/form">Record Form</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/record" component={Home}></Route>
            <Route path="/record/form" component={Form}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
