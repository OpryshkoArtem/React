import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <Expand
        isOpen={this.state.isOpen}
        onClose={this.hideDialog}
        onOpen={this.showDialog}
        title="Some title"
      >
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      </Expand>
    );
  }
}

export default App;
