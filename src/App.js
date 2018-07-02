import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CakeListContainer from './containers/CakeListContainer';
import CreateCakeContainer from './containers/CreateCakeContainer';
import ViewCakeContainer from './containers/ViewCakeContainer';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppBar position="static" color="primary">
            <Typography variant="title" color="inherit">
              Cake App
            </Typography>
          </AppBar>
          <div className="content">
            <Switch>
              <Route exact path="/" component={CakeListContainer} />
              <Route exact path="/cake/create" component={CreateCakeContainer} />
              <Route path="/cake/:id" component={ViewCakeContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
