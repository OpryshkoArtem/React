import React from "react";
import "./counter.scss";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: props.start,
		};
		// DON`T DO THIS WAY!!  bad bad bad
		setInterval(() => {
			this.setState({
				counter: this.state.counter + 1
			});
		}, props.interval);
	}

	render() {
		return(
		<div className="counter">{this.state.counter}</div>
	);
	}
}

export default Counter;