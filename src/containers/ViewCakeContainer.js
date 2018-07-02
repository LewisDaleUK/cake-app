import React, { Component } from 'react';
import CakeView from '../components/CakeView';
import Loader from '../components/Loader';

export default class ViewCakeContainer extends Component {
  state = {
    cake: {},
    loading: true,
  };

  componentDidMount() {
    const { match, history } = this.props;
    const id = match.params.id;

    fetch(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/${id}`)
      .then(result => {
        if(result.status !== 200) {
          history.push('/404');
        } else {
          return result.json();
        }
      }).then(cake => {
        if(cake) {
          this.setState({ cake, loading: false })
        }
      });
  }

  render() {
    return this.state.loading ? (<Loader />) : (<CakeView cake={this.state.cake} />);
  }
}
