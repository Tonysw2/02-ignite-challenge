import { RouterProvider } from 'react-router'
import { CartContextProvider } from './contexts/CheckoutContext'
import { router } from './Routes'

export const App = () => {
	return (
		<CartContextProvider>
			<RouterProvider router={router} />
		</CartContextProvider>
	)
}
