import { Outlet } from 'react-router'
import { Header } from '../components/Header'

export function DefaultLayout() {
	return (
		<div className="mx-auto my-0">
			<Header />
			<Outlet />
		</div>
	)
}
