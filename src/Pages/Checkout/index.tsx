import { FormEvent, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { AdressForm } from './AdressForm'
import { OrderedCoffeeList } from './OrderedCoffeeList'
import { Payment } from './Payment'
import { FirstCol, FormContainer, PaymentValue, SecondCol } from './styles'

interface PaymentState {
  totalOrder: string
  deliveryTax: string
  total: string
}

export function Checkout() {
  const { cart } = useContext(CartContext)

  const [paymentState, setPaymentState] = useState<PaymentState>({
    totalOrder: 'R$ 0,00',
    deliveryTax: 'R$ 0,00',
    total: 'R$ 0,00',
  })

  useEffect(() => {
    if (cart.length > 0) {
      const totalOrder = cart.reduce(
        (acc, current) => acc + current.price * current.amount,
        0,
      )
      const deliveryTax = Math.round(Math.random() * 5)

      const numberFormatOptions = { style: 'currency', currency: 'BRL' }

      setPaymentState({
        totalOrder: new Intl.NumberFormat('pt-br', numberFormatOptions).format(
          totalOrder,
        ),
        deliveryTax: new Intl.NumberFormat('pt-br', numberFormatOptions).format(
          deliveryTax,
        ),
        total: new Intl.NumberFormat('pt-br', numberFormatOptions).format(
          deliveryTax + totalOrder,
        ),
      })
    }
  }, [cart])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    window.location.href = '/'
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FirstCol>
        <h1>Complete seu pedido</h1>

        <div>
          <AdressForm />
          <Payment />
        </div>
      </FirstCol>

      <SecondCol>
        <h1>Cafés selecionados</h1>

        <div>
          <OrderedCoffeeList />

          <PaymentValue>
            <p>
              Total de itens <span>{paymentState.totalOrder}</span>
            </p>
            <p>
              Entrega <span>{paymentState.deliveryTax}</span>
            </p>
            <p>
              Total <span>{paymentState.total}</span>
            </p>
          </PaymentValue>

          <button>confirmar pedido</button>
        </div>
      </SecondCol>
    </FormContainer>
  )
}
