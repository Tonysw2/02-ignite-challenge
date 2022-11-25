import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.base_card};
  border-radius: 6px;

  & > header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    & > svg {
      color: ${(props) => props.theme.purple};
    }

    & > p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.125rem;

      color: ${(props) => props.theme.base_subtitle};

      & > span {
        font-size: 0.875rem;
        color: ${(props) => props.theme.base_text};
      }
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.875rem;

  & button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme.base_button};
    padding: 1rem;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme.base_text};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.base_hover};
    }

    & > svg {
      color: ${(props) => props.theme.purple};
    }
  }

  & .active {
    background: ${(props) => props.theme.purple_light};
    outline: 1px solid ${(props) => props.theme.purple_dark};

    &:hover {
      background: ${(props) => props.theme.purple_light};
    }
  }
`
