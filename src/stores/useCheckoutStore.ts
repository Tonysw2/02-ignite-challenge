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

export interface AddressType {
	bairro: string
	cep: string
	cidade: string
	complemento?: string
	estado: string
	número: string
	rua: string
}

type Store = {
	cart: CoffeeOrder[]
	address: AddressType
	paymentMethod: string
}

type Actions = {
	addToCart: (order: CoffeeOrder) => void
	removeFromCart: (id: string) => void
	increaseAmount: (id: string) => void
	decreaseAmount: (id: string) => void
	cleanCart: () => void
	setAddressAndPayment: (address: AddressType, paymentMethod: string) => void
}

export const useCheckoutStore = create<Store & Actions>()(
	devtools(
		persist(
			(set) => ({
				cart: [],
				address: {
					cep: '',
					rua: '',
					número: '',
					complemento: '',
					bairro: '',
					cidade: '',
					estado: '',
				},
				paymentMethod: '',

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

				setAddressAndPayment: (address, paymentMethod) =>
					set({ address, paymentMethod }, false, 'setAddressAndPayment'),
			}),
			{
				name: STORAGE_KEYS.checkoutStorage,
				partialize: (state) => ({
					cart: state.cart,
				}),
			},
		),
		{
			enabled: import.meta.env.DEV,
			name: 'Checkout Store',
			store: 'global',
		},
	),
)
