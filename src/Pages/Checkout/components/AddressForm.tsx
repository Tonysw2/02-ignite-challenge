import { MapPinLine } from 'phosphor-react'
import type { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import type { CheckoutFormData } from '../checkoutFormSchema'

export function AddressForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext<CheckoutFormData>()

	function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
		let value = e.currentTarget.value

		value = value.replace(/\D/g, '')
		value = value.replace(/(\d{5})(\d{3})/g, '$1-$2')
		e.currentTarget.value = value
	}

	return (
		<div className="flex flex-col justify-center gap-8 p-10 bg-card rounded-md ">
			<header className="flex items-start justify-start gap-2 ">
				<MapPinLine className="text-yellow-700  " size={22} />
				<p className="flex flex-col items-start justify-center gap-0.5 text-subtitle ">
					Endereço de entrega
					<span className="text-sm text-text ">
						Informe o endereço onde deseja receber seu pedido
					</span>
				</p>
			</header>

			<div className="grid grid-cols-5 grid-rows-4 gap-x-3 gap-y-4 ">
				<div className="col-span-2 flex flex-col gap-1">
					<input
						{...register('cep')}
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.cep ? 'border-red-500' : 'border-button'}`}
						onChange={handleCepChange}
						type="text"
						id="cep"
						placeholder="CEP"
					/>
					{errors.cep && (
						<span className="text-red-500 text-xs">{errors.cep.message}</span>
					)}
				</div>
				<div className="col-span-full flex flex-col gap-1">
					<input
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.rua ? 'border-red-500' : 'border-button'}`}
						{...register('rua')}
						type="text"
						id="rua"
						placeholder="Rua"
					/>
					{errors.rua && (
						<span className="text-red-500 text-xs">{errors.rua.message}</span>
					)}
				</div>
				<div className="col-span-2 flex flex-col gap-1">
					<input
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.número ? 'border-red-500' : 'border-button'}`}
						{...register('número')}
						type="text"
						id="número"
						placeholder="Número"
					/>
					{errors.número && (
						<span className="text-red-500 text-xs">
							{errors.número.message}
						</span>
					)}
				</div>
				<input
					className="col-span-3 border border-solid border-button rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700"
					{...register('complemento')}
					type="text"
					id="complemento"
					placeholder="Complemento"
				/>
				<div className="col-span-2 flex flex-col gap-1">
					<input
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.bairro ? 'border-red-500' : 'border-button'}`}
						{...register('bairro')}
						type="text"
						id="bairro"
						placeholder="Bairro"
					/>
					{errors.bairro && (
						<span className="text-red-500 text-xs">
							{errors.bairro.message}
						</span>
					)}
				</div>
				<div className="col-span-2 flex flex-col gap-1">
					<input
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.cidade ? 'border-red-500' : 'border-button'}`}
						{...register('cidade')}
						type="text"
						id="cidade"
						placeholder="Cidade"
					/>
					{errors.cidade && (
						<span className="text-red-500 text-xs">
							{errors.cidade.message}
						</span>
					)}
				</div>
				<div className="col-span-1 flex flex-col gap-1">
					<input
						{...register('estado')}
						className={`border border-solid rounded-sm p-3 bg-input text-text text-sm uppercase placeholder:text-label placeholder:text-sm focus:outline-1 focus:outline-yellow-700 ${errors.estado ? 'border-red-500' : 'border-button'}`}
						maxLength={2}
						type="text"
						id="estado"
						placeholder="UF"
					/>
					{errors.estado && (
						<span className="text-red-500 text-xs">
							{errors.estado.message}
						</span>
					)}
				</div>
			</div>
		</div>
	)
}
