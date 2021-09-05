import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
