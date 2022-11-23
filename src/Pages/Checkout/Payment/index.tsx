import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethodContainer } from './style'

export function Payment() {
  return (
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
  )
}
