import styled from 'styled-components'

export const AdressContainer = styled.div`
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
      color: ${(props) => props.theme.yellow_dark};
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
export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  column-gap: 0.75rem;
  row-gap: 1rem;

  & input {
    border: 1px solid ${(props) => props.theme.base_button};
    border-radius: 4px;
    padding: 0.75rem;
    background: ${(props) => props.theme.base_input};
    color: ${(props) => props.theme.base_text};
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme.base_label};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.yellow_dark};
    }
  }

  & input[id='cep'] {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & input[id='rua'] {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  & input[id='número'] {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  & input[id='complemento'] {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  & input[id='bairro'] {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  & input[id='cidade'] {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  & input[id='estado'] {
    grid-column: 3 / 4;
    grid-row: 4 / 5;
  }
`
