import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import DeliveryImage from '../../assets/delivery.svg'
import {
  Container,
  DeliveryDataContainer,
  SectionContainer,
  WrapInformation,
} from './styles'

export function Success() {
  return (
    <SectionContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que o café chegará até você</p>

      <Container>
        <DeliveryDataContainer>
          <WrapInformation>
            <div>
              <MapPin />
            </div>

            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </WrapInformation>

          <WrapInformation>
            <div>
              <Timer />
            </div>

            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </WrapInformation>

          <WrapInformation>
            <div>
              <CurrencyDollar />
            </div>

            <p>
              Pagamento na entrega <br /> <span>Cartão de Crédito</span>
            </p>
          </WrapInformation>
        </DeliveryDataContainer>

        <img src={DeliveryImage} alt="" />
      </Container>
    </SectionContainer>
  )
}
