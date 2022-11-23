import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { CartContext } from '../../contexts/CartContext'
import {
  AdressContainer,
  FirstCol,
  FormContainer,
  InputContainer,
  PaymentContainer,
  PaymentMethodContainer,
  SecondCol,
} from './styles'

export function Checkout() {
  const { cart } = useContext(CartContext)

  return (
    <FormContainer>
      <FirstCol>
        <h1>Complete seu pedido</h1>
        <AdressContainer>
          <header>
            <MapPinLine size={22} />
            <p>
              Endereço de entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </header>

          <InputContainer>
            <input type="text" id="cep" placeholder="CEP" />
            <input type="text" id="rua" placeholder="Rua" />
            <input type="text" id="número" placeholder="Número" />
            <input type="text" id="complemento" placeholder="Complemento" />
            <input type="text" id="bairro" placeholder="Bairro" />
            <input type="text" id="cidade" placeholder="Cidade" />
            <input type="text" id="estado" placeholder="UF" />
          </InputContainer>
        </AdressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <p>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </header>

          <PaymentMethodContainer>
            <div>
              <CreditCard size={16} />
              <p>cartão de crédito</p>
            </div>
            <div>
              <Bank size={16} />
              <p>cartão de débito</p>
            </div>
            <div className="active">
              <Money size={16} />
              <p>dinheiro</p>
            </div>
          </PaymentMethodContainer>
        </PaymentContainer>
      </FirstCol>

      <SecondCol>
        <h1>Cafés selecionados</h1>

        <div>
          <ul>
            {cart.map((coffee) => {
              return (
                <li key={uuid()}>
                  <img src={`${coffee.type}.png`} alt="" />
                  <p>{coffee.name}</p>
                  <p>{coffee.price}</p>
                </li>
              )
            })}
          </ul>

          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>Total</p>
          </div>
        </div>

        <button>confirmar pedido</button>
      </SecondCol>
    </FormContainer>
  )
}
