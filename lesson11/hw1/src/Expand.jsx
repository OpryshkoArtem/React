import React from 'react';

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
    const arrowBtn = this.state.isOpen
      ? <i className="fas fa-chevron-up" />
      : <i className="fas fa-chevron-down" />

			const content = this.state.isOpen ? (
				<div className="expand__content">
					{this.props.children}
				</div>
			) : null;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.showContent}>
            {arrowBtn}
          </button>
        </div>
          {content}
      </div>
    );
  }
}

export default Expand;
