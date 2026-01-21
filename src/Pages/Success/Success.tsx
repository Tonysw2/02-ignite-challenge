import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router'
import DeliveryImage from '../../assets/delivery.svg'

interface AddressType {
	bairro: string
	cep: string
	cidade: string
	complemento?: string
	estado: string
	número: string
	rua: string
}

interface LocationState {
	address: AddressType
	paymentMethod: string
}

export function Success() {
	const location = useLocation()
	const { address, paymentMethod } = location.state as LocationState

	return (
		<section className=" max-w-280 my-0 mx-auto">
			<h1 className="font-baloo font-extrabold text-2xl text-yellow-700 ">
				Uhu! Pedido confirmado
			</h1>
			<p className="text-xl text-subtitle mb-10 ">
				Agora é só aguardar que o café chegará até você
			</p>

			<div className="grid grid-cols-2 gap-25.5 ">
				<div className="flex items-center p-1 bg-linear-to-r from-yellow-500 to-purple-700 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] ">
					<div className="flex flex-col justify-center gap-8 p-10 w-full h-full bg-background rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] ">
						<div className="flex items-center gap-3 ">
							<div className="flex items-center justify-center p-2 bg-purple-700 rounded-full ">
								<MapPin size={16} weight="fill" className="text-white " />
							</div>

							<p className="text-text ">
								Entrega em
								<span className="font-bold ">{` ${address.rua}, ${address.número}`}</span>
								<br />
								{`${address.bairro} - ${address.cidade}, ${address.estado}`}
							</p>
						</div>

						<div className="flex items-center gap-3 ">
							<div className="flex items-center justify-center p-2 bg-purple-700 rounded-full ">
								<Timer size={16} className="text-white " />
							</div>

							<p className="text-text ">
								Previsão de entrega <br />{' '}
								<span className="font-bold ">20 min - 30 min</span>
							</p>
						</div>

						<div className="flex items-center gap-3 ">
							<div className="flex items-center justify-center p-2 bg-purple-700 rounded-full ">
								<CurrencyDollar size={16} className="text-white " />
							</div>

							<p className="text-text ">
								Pagamento na entrega <br />
								<span className="font-bold last:capitalize">
									{paymentMethod}
								</span>
							</p>
						</div>
					</div>
				</div>

				<img src={DeliveryImage} alt="" />
			</div>
		</section>
	)
}
