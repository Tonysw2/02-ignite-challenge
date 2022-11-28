import { Bank, CreditCard, Money } from 'phosphor-react'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { AdressForm } from './AdressForm'
import { OrderedCoffeeList } from './OrderedCoffeeList'
import { Payment } from './Payment'
import { FirstCol, FormContainer, PaymentValue, SecondCol } from './styles'

interface PaymentState {
  totalOrder: string
  deliveryTax: string
  total: string
}

export interface PaymentMethodsType {
  name: string
  icon: ReactNode
  active: boolean
}

export function Checkout() {
  const { checkoutState, cleanCart, setAdressAndPaymentMethod } =
    useContext(CheckoutContext)
  const navigate = useNavigate()
  const [paymentState, setPaymentState] = useState<PaymentState>({
    totalOrder: 'R$ 0,00',
    deliveryTax: 'R$ 0,00',
    total: 'R$ 0,00',
  })
  const orderForm = useForm()
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodsType[]>([
    {
      name: 'cartão de crédito',
      icon: <CreditCard size={16} />,
      active: false,
    },
    { name: 'cartão de débito', icon: <Bank size={16} />, active: false },
    { name: 'dinheiro', icon: <Money size={16} />, active: false },
  ])

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

  const { handleSubmit } = orderForm

  useEffect(() => {
    if (checkoutState.cart.length > 0) {
      const totalOrder = checkoutState.cart.reduce(
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
    } else {
      setPaymentState({
        totalOrder: 'R$ 0,00',
        deliveryTax: 'R$ 0,00',
        total: 'R$ 0,00',
      })
    }
  }, [checkoutState])

  function handleSubmitOrder(data: any) {
    const paymentMethod = paymentMethods.find(
      (method) => method.active === true,
    )
    setAdressAndPaymentMethod({
      adress: data,
      paymentMethod: paymentMethod?.name,
    })
    cleanCart()
    navigate('/Success')
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitOrder)}>
      <FirstCol>
        <h1>Complete seu pedido</h1>

        <div>
          <FormProvider {...orderForm}>
            <AdressForm />
          </FormProvider>

          <Payment
            paymentMethods={paymentMethods}
            handleToggleActivePaymentMethod={handleToggleActivePaymentMethod}
          />
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
