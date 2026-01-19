import { MapPinLine } from 'phosphor-react'
import type { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'

export function AdressForm() {
	const { register } = useFormContext()

	function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
		let value = e.currentTarget.value

		value = value.replace(/\D/g, '')
		value = value.replace(/(\d{5})(\d{3})/g, '$1-$2')
		e.currentTarget.value = value
	}

	return (
		<div className="flex flex-col justify-center gap-8 p-10 bg-card rounded-md ">
			<header className="flex items-start justify-start gap-2 ">
				<MapPinLine className="text-yellow700  " size={22} />
				<p className="flex flex-col items-start justify-center gap-[0.125rem] text-subtitle ">
					Endereço de entrega
					<span className="text-sm text-text ">
						Informe o endereço onde deseja receber seu pedido
					</span>
				</p>
			</header>

			<div className="grid grid-cols-5 grid-rows-4 gap-x-3 gap-y-4 ">
				<input
					{...register('cep')}
					className="col-span-2 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700 "
					onChange={handleCepChange}
					type="text"
					id="cep"
					placeholder="CEP"
					required
				/>
				<input
					className="col-span-full border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					{...register('rua')}
					type="text"
					id="rua"
					placeholder="Rua"
					required
				/>
				<input
					className="col-span-2 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					{...register('número')}
					type="text"
					id="número"
					placeholder="Número"
					required
				/>
				<input
					className="col-span-3 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					{...register('complemento')}
					type="text"
					id="complemento"
					placeholder="Complemento"
				/>
				<input
					className="col-span-2 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					{...register('bairro')}
					type="text"
					id="bairro"
					placeholder="Bairro"
					required
				/>
				<input
					className="col-span-2 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					{...register('cidade')}
					type="text"
					id="cidade"
					placeholder="Cidade"
					required
				/>
				<input
					{...register('estado')}
					className="col-span-1 border-[1px] border-solid border-button rounded-[4px] p-3 bg-input text-text text-sm uppercase placeholder:text-label placeholder:text-sm focus:outline focus:outline-1 focus:outline-yellow700  "
					maxLength={2}
					type="text"
					id="estado"
					placeholder="UF"
					required
				/>
			</div>
		</div>
	)
}
