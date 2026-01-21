import { Trash } from 'phosphor-react'
import { v4 as uuid } from 'uuid'
import { useShallow } from 'zustand/shallow'
import { InputAmount } from '../../../components/InputAmount'
import { useCartStore } from '../../../stores/useCartStore'

export function OrderedCoffeeList() {
	const { cart, removeFromCart, increaseAmount, decreaseAmount } =
		useCartStore(
			useShallow((state) => ({
				cart: state.cart,
				removeFromCart: state.removeFromCart,
				increaseAmount: state.increaseAmount,
				decreaseAmount: state.decreaseAmount,
			})),
		)

	return (
		<div className="overflow-y-auto max-h-[20.65rem] ">
			<ul className="flex flex-col justify-center list-none">
				{cart.map((coffee) => {
					return (
						<li
							key={uuid()}
							className="flex items-start justify-between py-2 pt-6 mb-6 border-t border-button first:border-none first:py-2 first:px-1   "
						>
							<div className="flex items-center gap-5 ">
								<img className="w-16 " src={`${coffee.type}.png`} alt="" />

								<div className="flex flex-col justify-center gap-2">
									<p>{coffee.name}</p>

									<div className="flex items-center gap-2">
										<InputAmount
											amount={coffee.amount}
											onIncrease={() => {
												increaseAmount(coffee.id)
											}}
											onDecrease={() => {
												decreaseAmount(coffee.id)
											}}
										/>

										<button
											className="flex items-center gap-1 bg-button rounded-md p-2 text-xs text-text leading-[1.734] uppercase cursor-pointer"
											type="button"
											onClick={() => removeFromCart(coffee.id)}
										>
											<Trash className="text-purple-500" size={16} />
											remover
										</button>
									</div>
								</div>
							</div>

							<p>
								{new Intl.NumberFormat('pt-br', {
									style: 'currency',
									currency: 'BRL',
								}).format(coffee.price)}
							</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
