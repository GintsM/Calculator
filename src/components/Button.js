import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, value, click } = this.props;
    return (
      <button type="button" className={className} onClick={click}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: '',
  className: '',
};

export default Button;
