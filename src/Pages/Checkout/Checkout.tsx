import { zodResolver } from '@hookform/resolvers/zod'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { type ReactNode, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useShallow } from 'zustand/shallow'
import { useCheckoutStore } from '../../stores/useCheckoutStore'
import { formatCurrency } from '../../utils/formatCurrency'
import { type CheckoutFormData, checkoutFormSchema } from './checkoutFormSchema'
import { AddressForm } from './components/AddressForm'
import { OrderedCoffeeList } from './components/OrderedCoffeeList'
import { Payment } from './components/Payment'

export interface PaymentMethodType {
	value: string
	name: string
	icon: ReactNode
}

export const PAYMENT_METHODS: PaymentMethodType[] = [
	{
		value: 'credit',
		name: 'cartão de crédito',
		icon: <CreditCard className="text-purple-500" size={16} />,
	},
	{
		value: 'debit',
		name: 'cartão de débito',
		icon: <Bank className="text-purple-500" size={16} />,
	},
	{
		value: 'cash',
		name: 'dinheiro',
		icon: <Money className="text-purple-500" size={16} />,
	},
]

export function Checkout() {
	const navigate = useNavigate()

	const { cart, cleanCart, setAddressAndPayment } = useCheckoutStore(
		useShallow((state) => ({
			cart: state.cart,
			cleanCart: state.cleanCart,
			setAddressAndPayment: state.setAddressAndPayment,
		})),
	)

	const orderTotals = useMemo(() => {
		const totalOrder = cart.reduce(
			(acc, current) => acc + current.price * current.amount,
			0,
		)
		const deliveryTax = 7

		return {
			totalOrder: formatCurrency(totalOrder),
			deliveryTax: formatCurrency(deliveryTax),
			total: formatCurrency(totalOrder + deliveryTax),
		}
	}, [cart])

	const form = useForm<CheckoutFormData>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			cep: '',
			rua: '',
			número: '',
			complemento: '',
			bairro: '',
			cidade: '',
			estado: '',
			paymentMethod: 'cash',
		},
	})

	const handleSubmit = form.handleSubmit((data) => {
		const { paymentMethod, ...address } = data
		setAddressAndPayment(address, paymentMethod)
		cleanCart()
		navigate('/Success')
	})

	return (
		<form
			className="grid grid-cols-[3fr_2fr] gap-x-8 max-w-280 my-0 mx-auto "
			onSubmit={handleSubmit}
		>
			<div>
				<h1 className="font-baloo font-bold text-lg text-subtitle mb-4 ">
					Complete seu pedido
				</h1>

				<FormProvider {...form}>
					<div className="flex flex-col gap-3 ">
						<AddressForm />
						<Payment />
					</div>
				</FormProvider>
			</div>

			<div>
				<h1 className="font-baloo font-bold text-lg text-subtitle mb-4 ">
					Cafés selecionados
				</h1>

				<div className="flex flex-col p-10 bg-card rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md ">
					<OrderedCoffeeList />

					<div className="flex flex-col justify-center gap-3 py-6 border-t border-solid border-button ">
						<p className="flex items-center justify-between text-sm text-text ">
							Total de itens
							<span className="text-base ">{orderTotals.totalOrder}</span>
						</p>
						<p className="flex items-center justify-between text-sm text-text ">
							Entrega
							<span className="text-base ">{orderTotals.deliveryTax}</span>
						</p>
						<p className="peer hover:cursor-pointer flex items-center justify-between text-sm text-text last:text-xl last:font-bold last:text-subtitle ">
							Total
							<span>{orderTotals.total}</span>
						</p>
					</div>

					<button
						type="submit"
						className="py-3 px-2 bg-yellow-500 font-bold text-sm leading- text-white uppercase rounded-md hover:transition-all hover:duration-200 hover:bg-yellow-700 "
					>
						confirmar pedido
					</button>
				</div>
			</div>
		</form>
	)
}
