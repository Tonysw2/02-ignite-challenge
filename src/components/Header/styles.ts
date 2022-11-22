import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  & > img {
    height: 2.5rem;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme.purple_light};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.purple};
  }
`

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.yellow_light};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  position: relative;

  & > svg {
    color: ${(props) => props.theme.yellow};
  }

  & > span {
    background: ${(props) => props.theme.yellow_dark};
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;

    position: absolute;
    top: -20%;
    right: -20%;
  }
`
