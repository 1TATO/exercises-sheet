import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  height: calc(100vh - div);
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border: 2px solid var(--button);
    color: var(--button);
    border-radius: 0.5rem;

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 600;

      &.action {
        width: 4rem;
        text-align: center;
      }
    }

    td {
      padding: 1rem 2rem;

      &.action {
        text-align: center;
        font-size: 1.25rem;
      }

      > button {
        color: var(--button);
        background: transparent;
        border: 0;
        font-size: 1.25rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
