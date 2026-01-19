import { Minus, Plus } from 'phosphor-react'

interface InputAmountProps {
	amount: number
	id?: string
	onIncrease: (param?: any) => void
	onDecrease: (param?: any) => void
}

export function InputAmount({ ...rest }: InputAmountProps) {
	return (
		<div className="h-[38px] flex items-center justify-center gap-1 p-2 bg-button rounded-md focus-within:outline-2 focus-within:outline-purple500">
			<button
				className="flex items-center justify-center border-none bg-transparent text-purple500 transition-all duration-200 hover:text-purple700 disabled:cursor-not-allowed"
				type="button"
				onClick={() => rest.onDecrease(rest.id)}
				disabled={rest.amount === 0}
			>
				<Minus size={14} weight={'bold'} />
			</button>

			<input
				className="w-5 bg-transparent text-title text-center focus:outline-none"
				type="number"
				placeholder="0"
				value={rest.amount}
				readOnly
			/>

			<button
				className="flex items-center justify-center border-none bg-transparent text-purple500 transition-all duration-200 hover:text-purple700"
				type="button"
				onClick={() => rest.onIncrease(rest.id)}
			>
				<Plus size={14} weight={'bold'} />
			</button>
		</div>
	)
}
