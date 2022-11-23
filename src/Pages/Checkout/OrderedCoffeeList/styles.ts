import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  list-style: none;

  & li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 0.5rem 0.25rem;
    padding-bottom: 1.5rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      & > img {
        width: 4rem;
      }
    }

    & > p {
      font-weight: 700;
      color: ${(props) => props.theme.base_text};
    }
  }

  & li + li {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.base_button};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > button {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      background: ${(props) => props.theme.base_button};
      border: none;
      border-radius: 6px;
      padding: 0.5rem;

      font-size: 0.75rem;
      line-height: 1.734;
      color: ${(props) => props.theme.base_text};
      text-transform: uppercase;

      & > svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
