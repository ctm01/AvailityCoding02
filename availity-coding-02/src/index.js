import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import Container from './container';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Registration Info: </h3>
        { <Container /> }
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
