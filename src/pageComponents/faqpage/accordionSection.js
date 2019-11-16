import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: '#fff',
          padding: '5px 10px',
          border: 'none'
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer', color: '#067B8D', borderBottom: '2px solid #ffc108', padding: '15px 15px 15px 0' }}>
          <strong>{label}</strong>
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9660;</span>}
            {isOpen && <span>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#fff',
              marginTop: 10,
              padding: '10px 20px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
