import styled from 'styled-components'

export const SectionContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.yellow_dark};
  }

  & > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
    margin-bottom: 2.5rem;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.375rem;
`

export const DeliveryDataContainer = styled.div`
  --gradient-yellow: ${(props) => props.theme.yellow};
  --gradient-purple: ${(props) => props.theme.purple};
  --gradient-background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background: linear-gradient(
        var(--gradient-background),
        var(--gradient-background)
      )
      padding-box,
    linear-gradient(to right, var(--gradient-yellow), var(--gradient-purple))
      border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const WrapInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    background: ${(props) => props.theme.yellow_dark};
    border-radius: 999px;

    & > svg {
      color: ${(props) => props.theme.background};
    }
  }

  & > p {
    color: ${(props) => props.theme.base_text};

    & > span {
      font-weight: 700;
    }
  }
`
