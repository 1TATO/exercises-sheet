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
  onClick: PropTypes.func.isRequired,
};

export default Button;
