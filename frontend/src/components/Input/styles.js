import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  border-radius: 0.5rem;
  border: 2px solid var(--button);
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  input {
    width: 100%;
    background: var(--background);
    border: 0;
  }
`;
