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

  & .active {
    background: ${(props) => props.theme.purple_light};
    outline: 1px solid ${(props) => props.theme.purple};
  }

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: ${(props) => props.theme.base_button};
    border-radius: 6px;

    & > svg {
      color: ${(props) => props.theme.purple};
    }

    & > p {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${(props) => props.theme.base_text};
    }

    &:hover {
      background: ${(props) => props.theme.base_hover};
    }
  }
`
