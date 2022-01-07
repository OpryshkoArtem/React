import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  toggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggle}>
        {this.state.status ? 'Off' : 'On'}
      </button>
    );
  }
}

export default Toggler;
