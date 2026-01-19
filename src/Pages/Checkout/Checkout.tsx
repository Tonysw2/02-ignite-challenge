import { Bank, CreditCard, Money } from 'phosphor-react'
import { type ReactNode, useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { AdressForm } from './components/AdressForm'
import { OrderedCoffeeList } from './components/OrderedCoffeeList'
import { Payment } from './components/Payment'

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
			icon: <CreditCard className="text-purple500 " size={16} />,
			active: false,
		},
		{
			name: 'cartão de débito',
			icon: <Bank className="text-purple500 " size={16} />,
			active: false,
		},
		{
			name: 'dinheiro',
			icon: <Money className="text-purple500 " size={16} />,
			active: false,
		},
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
			const deliveryTax = 7

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
		<form
			className="grid grid-cols-[3fr_2fr] gap-x-8 max-w-[70rem] my-0 mx-auto "
			onSubmit={handleSubmit(handleSubmitOrder)}
		>
			<div>
				<h1 className="font-baloo font-bold text-lg text-subtitle mb-4 ">
					Complete seu pedido
				</h1>

				<div className="flex flex-col gap-3 ">
					<FormProvider {...orderForm}>
						<AdressForm />
					</FormProvider>

					<Payment
						paymentMethods={paymentMethods}
						handleToggleActivePaymentMethod={handleToggleActivePaymentMethod}
					/>
				</div>
			</div>

			<div>
				<h1 className="font-baloo font-bold text-lg text-subtitle mb-4 ">
					Cafés selecionados
				</h1>

				<div className="flex flex-col p-10 bg-card rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md ">
					<OrderedCoffeeList />

					<div className="flex flex-col justify-center gap-3 py-6 border-t-[1px] border-solid border-button ">
						<p className="flex items-center justify-between text-sm text-text ">
							Total de itens
							<span className="text-base ">{paymentState.totalOrder}</span>
						</p>
						<p className="flex items-center justify-between text-sm text-text ">
							Entrega
							<span className="text-base ">{paymentState.deliveryTax}</span>
						</p>
						<p className="peer hover:cursor-pointer flex items-center justify-between text-sm text-text last:text-xl last:font-bold last:text-subtitle ">
							Total
							<span>{paymentState.total}</span>
						</p>
					</div>

					<button className="py-3 px-2 bg-yellow500 font-bold text-sm leading- text-white uppercase rounded-md hover:transition-all hover:duration-200 hover:bg-yellow700 ">
						confirmar pedido
					</button>
				</div>
			</div>
		</form>
	)
}
