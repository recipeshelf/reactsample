import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number.js';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { currentNumber: 0 };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sample React App</h1>
        </header>
        <div className="App-intro">
            <Number initialNumber={this.state.currentNumber} />
        </div>
      </div>
    );
  }

  componentDidMount() {
      axios('/number').then(res => {
          this.setState({ currentNumber: res.data ? res.data : 0 });
      });
  }
}

export default App;
