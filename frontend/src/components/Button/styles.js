import styled from 'styled-components';

export const Container = styled.button`
  color: #fff;
  background: var(--button);
  font-size: 1rem;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.5rem;
  height: 3rem;
  margin-top: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
