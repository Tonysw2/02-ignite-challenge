import { CurrencyDollar } from 'phosphor-react'
import { v4 as uuid } from 'uuid'
import { PaymentMethodsType } from '..'
import { PaymentContainer, PaymentMethodContainer } from './style'

interface PaymentProps {
  paymentMethods: PaymentMethodsType[]
  handleToggleActivePaymentMethod: (e: MouseEvent) => void
}

export function Payment({
  paymentMethods,
  handleToggleActivePaymentMethod,
}: PaymentProps) {
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
        {paymentMethods.map((method) => (
          <button
            key={uuid()}
            className={`${method.active ? 'active' : ''}`}
            type="button"
            onClick={handleToggleActivePaymentMethod}
          >
            {method.icon}
            {method.name}
          </button>
        ))}
      </PaymentMethodContainer>
    </PaymentContainer>
  )
}
