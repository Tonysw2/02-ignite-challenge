import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import DeliveryImage from '../../assets/delivery.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  Container,
  DeliveryDataContainer,
  SectionContainer,
  WrapInformation,
} from './styles'

export function Success() {
  const { checkoutState } = useContext(CheckoutContext)

  return (
    <SectionContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que o café chegará até você</p>

      <Container>
        <DeliveryDataContainer>
          <WrapInformation>
            <div>
              <MapPin size={16} weight="fill" />
            </div>

            <p>
              Entrega em
              <span>{` ${checkoutState.adress.rua}, ${checkoutState.adress.número}`}</span>
              <br />
              {`${checkoutState.adress.bairro} - ${checkoutState.adress.cidade}, ${checkoutState.adress.estado}`}
            </p>
          </WrapInformation>

          <WrapInformation>
            <div>
              <Timer size={16} />
            </div>

            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </WrapInformation>

          <WrapInformation>
            <div>
              <CurrencyDollar size={16} />
            </div>

            <p>
              Pagamento na entrega <br />
              <span>{checkoutState.paymentMethod}</span>
            </p>
          </WrapInformation>
        </DeliveryDataContainer>

        <img src={DeliveryImage} alt="" />
      </Container>
    </SectionContainer>
  )
}
