import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { STORAGE_KEYS } from '../constants/storageKeys'

export interface CoffeeOrder {
	id: string
	type: string
	name: string
	price: number
	amount: number
}

type Store = {
	cart: CoffeeOrder[]
}

type Actions = {
	addToCart: (order: CoffeeOrder) => void
	removeFromCart: (id: string) => void
	increaseAmount: (id: string) => void
	decreaseAmount: (id: string) => void
	cleanCart: () => void
}

export const useCartStore = create<Store & Actions>()(
	devtools(
		persist(
			(set) => ({
				cart: [],

				addToCart: (order) =>
					set(
						(state) => ({
							cart: [...state.cart, order],
						}),
						false,
						'addToCart',
					),

				removeFromCart: (id) =>
					set(
						(state) => ({
							cart: state.cart.filter((o) => o.id !== id),
						}),
						false,
						'removeFromCart',
					),

				increaseAmount: (id) =>
					set(
						(state) => ({
							cart: state.cart.map((o) =>
								o.id === id ? { ...o, amount: o.amount + 1 } : o,
							),
						}),
						false,
						'increaseAmount',
					),

				decreaseAmount: (id) =>
					set(
						(state) => ({
							cart: state.cart.map((o) =>
								o.id === id ? { ...o, amount: Math.max(1, o.amount - 1) } : o,
							),
						}),
						false,
						'decreaseAmount',
					),

				cleanCart: () => set({ cart: [] }, false, 'cleanCart'),
			}),
			{
				name: STORAGE_KEYS.cartStorage,
			},
		),
		{
			enabled: import.meta.env.DEV,
			name: 'Cart Store',
			store: 'global',
		},
	),
)
