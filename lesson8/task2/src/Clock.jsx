import React from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: getTimeWithOffset(props.offset).toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ offset: getTimeWithOffset(this.props.offset).toLocaleTimeString() });
    }, 1000);
  }

	componentWillUnmount() {
		clearInterval(this.interval);
	}

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
