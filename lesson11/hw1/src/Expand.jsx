import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isOpen: false,
  }

  showContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    const arrowBtn = isOpen
      ? <i className="fas fa-chevron-up" />
      : <i className="fas fa-chevron-down" />

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.showContent}>
            {arrowBtn}
          </button>
        </div>
        <div className="expand__content">
          {isOpen ? children : null}
        </div>
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Expand;
