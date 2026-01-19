import { CartContextProvider } from './contexts/CheckoutContext'
import { Router } from './Routes'

export function App() {
	return (
		<CartContextProvider>
			<Router />
		</CartContextProvider>
	)
}
