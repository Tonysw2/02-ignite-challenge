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

interface CartContextType {
  cart: CoffeeOrder[]
  addOrderToCart: (param: CoffeeOrder) => void
  removeOrderFromCart: ({ id }: { id: string }) => void
}
export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  function addOrderToCart(coffeeOrder: CoffeeOrder) {
    dispatch({ type: ActionTypes.ADD_COFFEE_TO_CART, payload: coffeeOrder })
  }

  function removeOrderFromCart({ id }: { id: string }) {
    dispatch({ type: ActionTypes.DELETE_COFFEE_FROM_CART, payload: { id } })
  }

  return (
    <CartContext.Provider value={{ cart, addOrderToCart, removeOrderFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
