import styled from 'styled-components'

export const InpuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;

  width: 4rem;

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.purple};
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.purple_dark};
    }
  }

  & > input {
    width: 100%;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.base_title};
    text-align: center;

    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
