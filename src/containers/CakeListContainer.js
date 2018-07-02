import React, { Component } from 'react';
import CakeList from '../components/CakeList';
import Loader from '../components/Loader';

// Container component for the Cake List.
// Manages cake list state
export default class CakeListContainer extends Component {
  state = {
    cakes: [],
    loading: true,
  };

  componentDidMount() {
    // Load cakes from API
    fetch('http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes')
      .then(results => results.json())
      .then(cakes => this.setState({ cakes, loading: false }));
  }

  render() {
    return this.state.loading ?
      (<Loader />) :
      (<CakeList cakes={this.state.cakes} />);
  }
}
