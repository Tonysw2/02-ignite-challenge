import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router'
import Logo from '../assets/logo.svg'
import { useCartStore } from '../stores/useCartStore'

export function Header() {
	const cartLength = useCartStore((state) => state.cart.length)

	return (
		<header className="flex items-center justify-between my-0 mx-auto max-w-280 py-8">
			<Link to={'/'}>
				<img src={Logo} alt="" />
			</Link>

			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 p-2 bg-purple-300 rounded-md text-purple-700 font-roboto">
					<span>
						<MapPin className="text-purple-500" size={22} weight={'fill'} />
					</span>
					Lençóis Paulista, SP
				</div>
				{cartLength > 0 ? (
					<Link to={'/Checkout'}>
						<button className="flex items-center justify-center p-2 bg-yellow-300 rounded-md text-yellow-700 relative">
							<ShoppingCart size={22} weight={'fill'} />
							{cartLength > 0 ? (
								<span className="absolute -top-1/4 -right-1/4 bg-yellow-700 text-white rounded-full text-center text-xs leading-2 font-bold w-5 h-5">
									{cartLength}
								</span>
							) : (
								''
							)}
						</button>
					</Link>
				) : (
					<button className="flex items-center justify-center p-2 bg-yellow-300 rounded-md text-yellow-700 cursor-not-allowed">
						<ShoppingCart size={22} weight={'fill'} />
						{cartLength > 0 ? <span>{cartLength}</span> : ''}
					</button>
				)}
			</div>
		</header>
	)
}
