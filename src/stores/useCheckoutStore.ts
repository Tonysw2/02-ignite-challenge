import { create } from 'zustand'
import { persist } from 'zustand/middleware'
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
				set((state) => ({
					cart: [...state.cart, order],
				})),

			removeFromCart: (id) =>
				set((state) => ({
					cart: state.cart.filter((o) => o.id !== id),
				})),

			increaseAmount: (id) =>
				set((state) => ({
					cart: state.cart.map((o) =>
						o.id === id ? { ...o, amount: o.amount + 1 } : o,
					),
				})),

			decreaseAmount: (id) =>
				set((state) => ({
					cart: state.cart.map((o) =>
						o.id === id ? { ...o, amount: Math.max(1, o.amount - 1) } : o,
					),
				})),

			cleanCart: () => set({ cart: [] }),

			setAddressAndPayment: (address, paymentMethod) =>
				set({ address, paymentMethod }),
		}),
		{
			name: STORAGE_KEYS.checkoutStorage,
			partialize: (state) => ({
				cart: state.cart,
			}),
		},
	),
)
