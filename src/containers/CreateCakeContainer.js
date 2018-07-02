import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateCake from '../components/CreateCake';

export default class CreateCakeContainer extends Component {
  state = {
    cake: {
      name: '',
      comment: '',
      imageUrl: '',
      yumFactor: 1
    },
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(key, value) {
    const cake = Object.assign({}, this.state.cake, {[key]: value});
    this.setState({ cake });
  }

  onSubmit(event) {
    const { history } = this.props;
    event.preventDefault();

    fetch('http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.cake)
    }).then(() => history.push('/'));
  }

  render() {
    return (
      <CreateCake
        onSubmit={this.onSubmit}
        onValueChange={this.handleChange}
        cake={this.state.cake}
      />
    );
  }
};

CreateCakeContainer.propTypes = {
  /**
   * History object provided by react-router-dom
   */
  history: PropTypes.object.isRequired,
};
