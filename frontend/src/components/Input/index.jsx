import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ type, name, placeholder }) {
  const inputRef = useRef(null);
  const {
    fieldName,
    error,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
      />

      {error}
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
