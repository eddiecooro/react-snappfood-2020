import React, { PureComponent } from 'react';
import './App.css';
import Form from './Form';
import ErrorBoundary from './ErrorBoundary';

const initialState = {
  person: {
    year: ''
  },
  error: ''
};
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleError = error => {
    this.setState({ error });
  };
  handleReload = () => {
    this.setState(initialState);
  };
  handleChange = event => {
    this.setState({ person: { year: event.target.value } });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ErrorBoundary
            error={this.state.error}
            reloadBtnOnClick={this.handleReload}
            onError={this.handleError}>
            <Form handleChange={this.handleChange} person={this.state.person} />
          </ErrorBoundary>
        </header>
      </div>
    );
  }
}

export default App;
