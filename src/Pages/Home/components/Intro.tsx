import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../../assets/Coffee.svg'

export function Intro() {
	return (
		<div className="w-full py-23 bg-[url('./Background.svg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
			<article className="grid grid-cols-[1fr_auto] gap-x-14 max-w-280">
				<div>
					<div className=" flex flex-col gap-4 mb-16">
						<h1 className="font-baloo font-extrabold text-title text-3xl">
							Encontre o café perfeito para qualquer hora do dia
						</h1>
						<p className="text-xl text-subtitle">
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</p>
					</div>

					<div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-10 gap-y-5">
						<p className="flex items-center justify-start gap-3 text-text">
							<span className="flex items-center justify-center p-2 rounded-full bg-yellow-700">
								<ShoppingCart
									className="text-white"
									size={'1rem'}
									weight={'fill'}
								/>
							</span>
							Compra simples e segura
						</p>
						<p className="flex items-center justify-start gap-3">
							<span className="flex items-center justify-center p-2 rounded-full bg-subtitle">
								<Package className="text-white" size={'1rem'} weight={'fill'} />
							</span>
							Embalagem mantém o café intacto
						</p>
						<p className="flex items-center justify-start gap-3">
							<span className="flex items-center justify-center p-2 rounded-full bg-yellow-500">
								<Timer className="text-white" size={'1rem'} weight={'fill'} />
							</span>
							Entrega rápida e rastreada
						</p>
						<p className="flex items-center justify-start gap-3">
							<span className="flex items-center justify-center p-2 rounded-full bg-purple-500">
								<Coffee className="text-white" size={'1rem'} weight={'fill'} />
							</span>
							O café chega fresquinho até voce
						</p>
					</div>
				</div>

				<img
					className="self-center justify-self-end"
					src={CoffeeImage}
					alt=""
				/>
			</article>
		</div>
	)
}
