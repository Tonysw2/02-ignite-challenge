import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/actions'
import { cartReducer } from '../reducers/cartReducer'

export interface CoffeeOrder {
  id: string
  type: string
  name: string
  price: number
  amount: number
}

export interface AdressType {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  estado: string
  número: string
  rua: string
}

export interface checkoutStateType {
  cart: CoffeeOrder[]
  adress: AdressType
  paymentMethod: string
}

interface AdressPayment {
  adress: AdressType
  paymentMethod: string | undefined
}

interface CheckoutContextType {
  checkoutState: checkoutStateType
  addOrderToCart: (param: CoffeeOrder) => void
  removeOrderFromCart: ({ id }: { id: string }) => void
  increaseAmountOnCart: ({ id }: { id: string }) => void
  decreaseAmountOnCart: ({ id }: { id: string }) => void
  cleanCart: () => void
  setAdressAndPaymentMethod: (param: AdressPayment) => void
}
export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(cartReducer, {
    cart: [],
    adress: {
      cep: '',
      rua: '',
      número: '',
      complemento: '',
      bairro: '',
      estado: '',
    },
    paymentMethod: '',
  })
  // const [] = useState()

  function addOrderToCart(coffeeOrder: CoffeeOrder) {
    dispatch({ type: ActionTypes.ADD_COFFEE_TO_CART, payload: coffeeOrder })
  }

  function removeOrderFromCart({ id }: { id: string }) {
    dispatch({ type: ActionTypes.DELETE_COFFEE_FROM_CART, payload: { id } })
  }

  function increaseAmountOnCart({ id }: { id: string }) {
    dispatch({ type: ActionTypes.INCREASE_AMOUNT_ON_CART, payload: { id } })
  }

  function decreaseAmountOnCart({ id }: { id: string }) {
    dispatch({ type: ActionTypes.DECREASE_AMOUNT_ON_CART, payload: { id } })
  }

  function setAdressAndPaymentMethod(adressAndPaymentMethod: AdressPayment) {
    dispatch({
      type: ActionTypes.SET_ADRESS_AND_PAYMENT_METHOD,
      payload: adressAndPaymentMethod,
    })
  }

  function cleanCart() {
    dispatch({ type: ActionTypes.CLEAN_CART })
  }

  return (
    <CheckoutContext.Provider
      value={{
        checkoutState,
        addOrderToCart,
        removeOrderFromCart,
        increaseAmountOnCart,
        decreaseAmountOnCart,
        cleanCart,
        setAdressAndPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
