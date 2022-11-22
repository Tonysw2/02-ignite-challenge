import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../assets/Coffee.svg'
import { CoffeeList } from './CoffeeList'
import {
  BackgroundImage,
  HomeContainer,
  Item,
  ItemsContainer,
  TextContainer,
} from './styles'

export function Home() {
  return (
    <div>
      <BackgroundImage>
        <HomeContainer>
          <div>
            <TextContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TextContainer>

            <ItemsContainer>
              <p>
                <Item itemColor="yellowDark">
                  <ShoppingCart size={'1rem'} weight={'fill'} />
                </Item>
                Compra simples e segura
              </p>
              <p>
                <Item itemColor="brown">
                  <Package size={'1rem'} weight={'fill'} />
                </Item>
                Embalagem mantém o café intacto
              </p>
              <p>
                <Item itemColor="yellow">
                  <Timer size={'1rem'} weight={'fill'} />
                </Item>
                Entrega rápida e rastreada
              </p>
              <p>
                <Item itemColor="purple">
                  <Coffee size={'1rem'} weight={'fill'} />
                </Item>
                O café chega fresquinho até voce
              </p>
            </ItemsContainer>
          </div>

          <img src={CoffeeImage} alt="" />
        </HomeContainer>
      </BackgroundImage>

      <CoffeeList />
    </div>
  )
}
