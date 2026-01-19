import { createBrowserRouter } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout/Checkout'
import { Home } from './Pages/Home/Home'
import { Success } from './Pages/Success/Success'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: DefaultLayout,
		children: [
			{ index: true, Component: Home },
			{ path: 'checkout', Component: Checkout },
			{ path: 'success', Component: Success },
		],
	},
])
