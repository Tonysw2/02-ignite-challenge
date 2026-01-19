import { RouterProvider } from 'react-router'
import { router } from './Routes'

export const App = () => {
	return <RouterProvider router={router} />
}
