import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyBgColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          className="colors__button"
          onClick={() => this.setBodyBgColor(RED)}
        ></button>
        <button
          style={{ backgroundColor: GREEN }}
          className="colors__button"
          onClick={() => this.setBodyBgColor(GREEN)}
        ></button>
        <button
          style={{ backgroundColor: BLUE }}
          className="colors__button"
          onClick={() => this.setBodyBgColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
