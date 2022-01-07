import React from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: '',
    };
  }
  showText = value => {
    this.setState({
      colorText: value,
    });
  };
  resetText = () => {
    this.setState({
      colorText: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.showText(CORAL)}
						onMouseOut={this.resetText}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.showText(AQUA)}
						onMouseOut={this.resetText}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.showText(BISQUE)}
						onMouseOut={this.resetText}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
