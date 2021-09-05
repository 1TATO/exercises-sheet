import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 600px;
    height: 600px;
  }

  > div {
    margin-left: 25px;
    text-align: center;

    p {
      font-size: 2rem;
    }

    div {
      width: 100%;
      margin: 0 auto;
      margin-top: 3rem;

      a {
        /* button {
          font-size: 1rem;
          color: #fff;
          background: var(--button);
          border: 0;
          padding: 0 2rem;
          border-radius: 0.25rem;
          height: 3rem;

          transition: filter 0.2s;
  
          &:hover {
            filter: brightness(0.9);
          }
        } */

        & + a {
          margin-left: 3rem;
        }
      }
    }
  }
`;
