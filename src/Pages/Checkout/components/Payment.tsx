import { CurrencyDollar } from 'phosphor-react'
import { RadioGroup } from 'radix-ui'
import { Controller, useFormContext } from 'react-hook-form'
import { PAYMENT_METHODS } from '../Checkout'
import type { CheckoutFormData } from '../checkoutFormSchema'

export function Payment() {
	const { control } = useFormContext<CheckoutFormData>()

	return (
		<div className="flex flex-col justify-center gap-8 p-10 bg-card rounded-md">
			<header className="flex items-start justify-start gap-2">
				<CurrencyDollar className="text-purple-500" size={22} />
				<p className="flex flex-col items-start justify-center gap-0.5 text-subtitle">
					Pagamento
					<span className="text-sm text-text">
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</p>
			</header>

			<Controller
				name="paymentMethod"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<div className="flex flex-col gap-2">
						<RadioGroup.Root
							className="grid grid-cols-3 items-center gap-3.5"
							value={field.value}
							onValueChange={field.onChange}
						>
							{PAYMENT_METHODS.map((method) => (
								<RadioGroup.Item
									key={method.value}
									value={method.value}
									className="data-[state=checked]:bg-purple-300 data-[state=checked]:outline-1 data-[state=checked]:outline-purple-700 bg-button hover:bg-hover flex items-center justify-start gap-3 rounded-md p-4 text-xs text-text leading-2 uppercase cursor-pointer hover:transition-all hover:duration-200"
								>
									{method.icon}
									{method.name}
								</RadioGroup.Item>
							))}
						</RadioGroup.Root>
						{error && (
							<span className="text-red-500 text-xs">{error.message}</span>
						)}
					</div>
				)}
			/>
		</div>
	)
}
