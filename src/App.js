import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Contact}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
