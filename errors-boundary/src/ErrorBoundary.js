import React, { Component } from 'react';
import Error from './Error';

export default class ErrorBoundary extends Component {
  componentDidCatch(error) {
    this.props.onError(error);
  }
  render() {
    return this.props.error ? (
      <Error reloadBtnOnClick={this.props.reloadBtnOnClick} />
    ) : (
      this.props.children
    );
  }
}
