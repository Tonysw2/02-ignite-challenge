import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  max-width: 70rem;
  margin: 0 auto;
`

export const FirstCol = styled.div`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.base_subtitle};

    margin-bottom: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const SecondCol = styled.div`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.base_subtitle};

    margin-bottom: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    background: ${(props) => props.theme.base_card};
    border-radius: 6px 44px;
    padding: 2.5rem;

    & > button {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      padding: 0.75rem 0.5rem;
      border: none;
      border-radius: 6px;
      transition: all 0.2s;

      &:hover {
        background: ${(props) => props.theme.yellow_dark};
      }
    }
  }
`

export const PaymentValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  padding: 1.5rem 0;
  border-top: 1px solid ${(props) => props.theme.base_button};

  & p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 0.875rem;
    color: ${(props) => props.theme.base_text};

    & > span {
      font-size: 1rem;
    }

    &:last-child {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.base_subtitle};
    }

    &:last-child > span {
      font-size: 1.25rem;
    }
  }
`
