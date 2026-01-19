import { Minus, Plus } from 'phosphor-react'

interface InputAmountProps {
	amount: number
	id?: string
	onIncrease: (param?: any) => void
	onDecrease: (param?: any) => void
}

export function InputAmount({ ...rest }: InputAmountProps) {
	return (
		<div className="h-9.5 flex items-center justify-center gap-1 p-2 bg-button rounded-md focus-within:outline-2 focus-within:outline-purple-500">
			<button
				className="flex items-center justify-center border-none bg-transparent text-purple-500 transition-all duration-200 hover:text-purple-700 disabled:cursor-not-allowed"
				type="button"
				onClick={() => rest.onDecrease(rest.id)}
				disabled={rest.amount === 0}
			>
				<Minus size={14} weight={'bold'} />
			</button>

			<input
				className="w-5 bg-transparent text-title text-base text-center p-0 focus:outline-none"
				type="number"
				placeholder="0"
				value={rest.amount}
				readOnly
			/>

			<button
				className="flex items-center justify-center border-none bg-transparent text-purple-500 transition-all duration-200 hover:text-purple-700"
				type="button"
				onClick={() => rest.onIncrease(rest.id)}
			>
				<Plus size={14} weight={'bold'} />
			</button>
		</div>
	)
}
