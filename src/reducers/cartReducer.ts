import { CoffeeOrder } from '../contexts/CartContext'
import { ActionTypes } from './actions'

export function cartReducer(state: CoffeeOrder[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      return [...state, action.payload]
    }

    case ActionTypes.DELETE_COFFEE_FROM_CART: {
      const updatedCart = state.filter(
        (order) => order.id !== action.payload.id,
      )

      return updatedCart
    }

    default: {
      return state
    }
  }
}
