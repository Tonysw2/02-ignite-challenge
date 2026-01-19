import { ShoppingCart } from 'phosphor-react'
import { type FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { InputAmount } from '../../../components/InputAmount'
import { useCheckoutStore } from '../../../stores/useCheckoutStore'

interface CoffeeDetails {
	type: string
	id: string
	tag: string[]
	name: string
	description: string
	price: number
}

interface CoffeeItemProps {
	coffeeDetails: CoffeeDetails
}

export function CoffeeItem({ coffeeDetails }: CoffeeItemProps) {
	const [amountInput, setAmountInput] = useState(0)
	const addToCart = useCheckoutStore((state) => state.addToCart)

	function increaseAmountInput() {
		setAmountInput((prev) => prev + 1)
	}

	function decreaseAmountInput() {
		setAmountInput((prev) => {
			return prev === 0 ? 0 : prev - 1
		})
	}

	function handleAddCoffeeToCart(event: FormEvent) {
		event.preventDefault()

		if (amountInput === 0) return

		addToCart({
			id: coffeeDetails.id,
			type: coffeeDetails.type,
			name: coffeeDetails.name,
			amount: amountInput,
			price: coffeeDetails.price,
		})

		setAmountInput(0)
	}

	const splitedFormattedPrice = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	}).format(coffeeDetails.price)

	return (
		<li
			className="flex flex-col items-center w-64 p-5 bg-card rounded-tl-md rounded-bl-[36px] rounded-tr-[36px] rounded-br-md"
			key={coffeeDetails.id}
		>
			<img
				className="w-[120px] h-[120px] -mt-12 mb-3"
				src={`${coffeeDetails.type}.png`}
				alt=""
			/>

			<div className="flex items-center gap-1 mb-4">
				{coffeeDetails.tag.map((tag) => (
					<p
						className="rounded-full py-1 px-2 bg-yellow-300 font-bold text-1xs text-center text-yellow-700 uppercase"
						key={uuid()}
					>
						{tag}
					</p>
				))}
			</div>

			<p className="flex flex-col items-center justify-center gap-2 mb-8 font-baloo font-bold text-xl text-subtitle">
				{coffeeDetails.name}
				<span className="font-normal font-roboto text-center text-sm text-label normal-case">
					{coffeeDetails.description}
				</span>
			</p>

			<form
				className="flex items-center justify-between w-full"
				onSubmit={handleAddCoffeeToCart}
			>
				<p className="font-baloo font-extrabold text-1xl text-text">
					{splitedFormattedPrice}
				</p>

				<div className="flex items-center gap-2">
					<InputAmount
						amount={amountInput}
						onIncrease={increaseAmountInput}
						onDecrease={decreaseAmountInput}
					/>

					<button
						className="flex items-center justify-center p-2 rounded-md bg-purple-700"
						type="submit"
					>
						<ShoppingCart className="text-white" size={22} weight={'fill'} />
					</button>
				</div>
			</form>
		</li>
	)
}
