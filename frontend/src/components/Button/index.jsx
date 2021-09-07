import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ onClick, children }) {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  onClick: PropTypes.any.isRequired,
};

// Button.defaultProps = {
//   onClick: PropTypes.any,
// };

// PropTypes.checkPropTypes(Button.propTypes, Button.defaultProps, 'prop', 'Button');

export default Button;
