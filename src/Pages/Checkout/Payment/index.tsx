import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PaymentContainer, PaymentMethodContainer } from './style'

interface PaymentMethodsType {
  name: string
  icon: ReactNode
  active: boolean
}

export function Payment() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodsType[]>([
    {
      name: 'cartão de crédito',
      icon: <CreditCard size={16} />,
      active: false,
    },
    { name: 'cartão de débito', icon: <Bank size={16} />, active: false },
    { name: 'dinheiro', icon: <Money size={16} />, active: false },
  ])
  console.log(paymentMethods)

  function handleToggleActivePaymentMethod(e: MouseEvent) {
    setPaymentMethods((prev) => {
      return prev.map((paymentMethod) => {
        if (
          e.target.textContent === paymentMethod.name &&
          paymentMethod.active !== true
        ) {
          return { ...paymentMethod, active: true }
        } else if (
          e.target.textContent === paymentMethod.name &&
          paymentMethod.active === true
        ) {
          return paymentMethod
        } else {
          return { ...paymentMethod, active: false }
        }
      })
    })
  }

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
