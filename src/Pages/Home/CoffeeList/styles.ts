import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 10rem;
  max-width: 70rem;

  & > h1 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme.base_subtitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2.5rem;
  flex-wrap: wrap;
  list-style: none;
`
