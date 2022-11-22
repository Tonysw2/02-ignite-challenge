import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  padding: 1.25rem;
  background: ${(props) => props.theme.base_card};
  border-radius: 6px 36px;

  & > img {
    width: 7.5rem;
    margin-top: -3rem;
    margin-bottom: 0.75rem;
  }

  & > p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;

    margin-bottom: 2rem;

    & > span {
      display: block;
      margin-top: 0.5rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const CoffeeTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;

  margin-bottom: 1rem;

  & p {
    background: ${(props) => props.theme.yellow_light};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    text-align: center;

    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme.yellow_dark};
  }
`

export const BuyContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.375rem;

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.base_text};

    & > span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > input {
      width: 4rem;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme.base_button};
      color: ${(props) => props.theme.base_title};

      padding: 0.5rem;

      &:focus {
        outline: 2px solid ${(props) => props.theme.purple_dark};
      }

      &::placeholder {
        color: ${(props) => props.theme.base_label};
      }
    }

    & > button[type='submit'] {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;
      background: ${(props) => props.theme.purple_dark};
      color: ${(props) => props.theme.background};
      border: none;
      border-radius: 6px;

      transition: all 0.2s;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
