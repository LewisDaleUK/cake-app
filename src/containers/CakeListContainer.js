import React, { Component } from 'react';
import CakeList from '../components/CakeList';

// Container component for the Cake List.
// Manages cake list state
export default class CakeListContainer extends Component {
  render() {
    return (<CakeList />);
  }
}
