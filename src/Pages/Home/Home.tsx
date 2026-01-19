import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'

export function Home() {
	return (
		<div>
			<Intro />

			<section className="max-w-[70rem] my-0 mb-40 mx-auto">
				<h1 className="font-baloo font-extrabold text-2xl mt-8 mb-14">
					Nossos cafés
				</h1>

				<CoffeeList />
			</section>
		</div>
	)
}
