import PropTypes from 'prop-types';

const Button = ({ className, value, onEvent }) => (
  <button type="button" className={className} onClick={() => onEvent(value)}>
    {value}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onEvent: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  value: '',
};

export default Button;
