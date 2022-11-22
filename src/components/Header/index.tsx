import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  ActionContainer,
  CartContainer,
  HeaderContainer,
  Location,
} from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <ActionContainer>
        <Location>
          <span>
            <MapPin size={22} weight={'fill'} />
          </span>
          Porto Alegre, RS
        </Location>
        <Link to={'/Checkout'}>
          <CartContainer>
            <ShoppingCart size={22} weight={'fill'} />
            {cart.length > 0 ? <span>{cart.length}</span> : ''}
          </CartContainer>
        </Link>
      </ActionContainer>
    </HeaderContainer>
  )
}
