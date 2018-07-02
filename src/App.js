import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">Cake App</h1>
          </header>
          <div className="content">
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
