import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeOrder } from '../Pages/Home/CoffeeList/CoffeeItem'
import { ActionTypes } from '../reducers/actions'

interface CartContextType {
  cart: CoffeeOrder[]
  addCoffeeToCart: (coffeeOrder: CoffeeOrder) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

function CartReducer(state: CoffeeOrder[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      return [...state, action.payload]
    }

    case ActionTypes.DELETE_COFFEE_FROM_CART: {
      const updatedCart = state.filter((coffee) => {
        if (coffee.id !== action.payload.id) {
          return coffee
        } else {
          return null
        }
      })

      return updatedCart
    }

    case ActionTypes.INCREASE_AMOUNT: {
      const updatedCart = state.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return { ...coffee, amount: coffee.amount + 1 }
        } else {
          return coffee
        }
      })

      return updatedCart
    }

    case ActionTypes.DECREASE_AMOUNT: {
      const updatedCart = state.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return { ...coffee, amount: coffee.amount - 1 }
        } else {
          return coffee
        }
      })

      return updatedCart
    }

    default: {
      return []
    }
  }
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(CartReducer, [])
  console.log(cart)

  function addCoffeeToCart(coffeeOrder: CoffeeOrder) {
    dispatch({ type: ActionTypes.ADD_COFFEE_TO_CART, payload: coffeeOrder })
  }

  return (
    <CartContext.Provider value={{ cart, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
