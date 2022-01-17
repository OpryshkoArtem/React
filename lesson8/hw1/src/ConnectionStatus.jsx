import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.isConnect);
    window.addEventListener('offline', this.isConnect);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isConnect);
    window.removeEventListener('offline', this.isConnect);
  }
  isConnect = event => {
    this.setState({
      status: event.type,
    });
  };

  render() {
    const statusClass = this.state.status === 'offline' ? 'status_offline' : '';

    return <div className={`status ${statusClass}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
