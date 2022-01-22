import React from 'react';

const Expand = ({ isOpen, children, title, onClose, onOpen }) => {
  if (!isOpen) {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onOpen}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

export default Expand;
