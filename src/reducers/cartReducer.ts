import type { checkoutStateType } from '../contexts/CheckoutContext'
import { ActionTypes } from './actions'

export function cartReducer(state: checkoutStateType, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_COFFEE_TO_CART: {
			return {
				...state,
				cart: [...state.cart, action.payload],
			}
		}

		case ActionTypes.DELETE_COFFEE_FROM_CART: {
			const updatedCart = state.cart.filter(
				(order) => order.id !== action.payload.id,
			)

			return {
				...state,
				cart: updatedCart,
			}
		}

		case ActionTypes.INCREASE_AMOUNT_ON_CART: {
			const updatedCart = state.cart.map((order) => {
				if (action.payload.id === order.id) {
					return { ...order, amount: order.amount + 1 }
				} else {
					return order
				}
			})

			return {
				...state,
				cart: updatedCart,
			}
		}

		case ActionTypes.DECREASE_AMOUNT_ON_CART: {
			const updatedCart = state.cart.map((order) => {
				if (action.payload.id === order.id) {
					return { ...order, amount: order.amount === 1 ? 1 : order.amount - 1 }
				} else {
					return order
				}
			})

			return {
				...state,
				cart: updatedCart,
			}
		}

		case ActionTypes.CLEAN_CART: {
			return { ...state, cart: [] }
		}

		case ActionTypes.SET_ADRESS_AND_PAYMENT_METHOD: {
			return {
				...state,
				adress: action.payload.adress,
				paymentMethod: action.payload.paymentMethod,
			}
		}

		default: {
			return state
		}
	}
}
