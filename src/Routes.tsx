import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout/Checkout'
import { Home } from './Pages/Home/Home'
import { Success } from './Pages/Success/Success'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/Checkout" element={<Checkout />} />
				<Route path="/Success" element={<Success />} />
			</Route>
		</Routes>
	)
}
