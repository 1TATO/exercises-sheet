import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.5rem 2rem;

  max-width: 90vw;
  height: 25.5rem;
  
  border: 2px solid var(--button);
  border-radius: 0.5rem;

  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 400px;
  }
`;
