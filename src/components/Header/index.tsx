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
  const cart = []

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={Logo} alt="" />
      </Link>
      <ActionContainer>
        <Location>
          <span>
            <MapPin size={22} weight={'fill'} />
          </span>
          Porto Alegre, RS
        </Location>
        {cart.length > 0 ? (
          <Link to={'/Checkout'}>
            <CartContainer>
              <ShoppingCart size={22} weight={'fill'} />
              {cart.length > 0 ? <span>{cart.length}</span> : ''}
            </CartContainer>
          </Link>
        ) : (
          <CartContainer>
            <ShoppingCart size={22} weight={'fill'} />
            {cart.length > 0 ? <span>{cart.length}</span> : ''}
          </CartContainer>
        )}
      </ActionContainer>
    </HeaderContainer>
  )
}
