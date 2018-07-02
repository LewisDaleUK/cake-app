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
    event.preventDefault();
    const { history } = this.props;
    history.push('/');
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
