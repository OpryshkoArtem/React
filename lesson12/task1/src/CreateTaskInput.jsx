import React, { Component } from 'react';

class CreateTaskInput extends Component {
	state = {
		value: '',
	};

	handleChange = event => {
		this.setState({
			value: event.target.value,
		})
	}

	handleTaskCreate = () => {
		this.props.onCreate(this.state.value);
		this.setState({ value: '' })
	}

  render() {
    return (
      <div className="create-task">
        <input
					className="create-task__input"
					type="text"
					alue={this.state.value}
					onChange={this.handleChange}
				/>
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>Create</button>
      </div>
    );
  }
}

export default CreateTaskInput;
// взяти текст з інпута
// створити таску з цим текстом
// добавити таску в список
