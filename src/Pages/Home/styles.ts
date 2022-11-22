import styled from 'styled-components'

const ITEMS_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow_dark',
  brown: 'base_text',
  purple: 'purple',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEMS_COLOR
}

export const BackgroundImage = styled.div`
  background: no-repeat center/cover;
  background-image: url('/Background.svg');
  width: 100%;
  padding: 5.75rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  max-width: 70rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4.125rem;
  }

  & > img {
    width: 29.75rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme.base_title};
  }

  & > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  & p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme.base_text};
  }
`

export const Item = styled.span<ItemProps>`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[ITEMS_COLOR[props.itemColor]]};
  border-radius: 999px;
  padding: 0.5rem;
`
