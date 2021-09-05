import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 60px;
    width: 60px;
  }

  a {
    font-size: 1rem;
    color: #fff;

    & + a {
      margin-left: 2rem;
    }

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
