import React, { Component } from 'react';
import CakeView from '../components/CakeView';
import cakes from '../constants/cakes';

export default class ViewCakeContainer extends Component {
  state = {
    cake: {},
  };

  componentDidMount() {
    const { match, history } = this.props;
    const id = parseInt(match.params.id, 10);
    const cake = cakes.find(i => i.id === id);

    if(cake) {
      this.setState({ cake });
    } else {
      history.push('/404');
    }
  }

  render() {
    return (<CakeView cake={this.state.cake} />);
  }
}
