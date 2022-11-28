import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  ActionContainer,
  CartContainer,
  HeaderContainer,
  Location,
} from './styles'

export function Header() {
  const { checkoutState } = useContext(CheckoutContext)

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
        {checkoutState.cart.length > 0 ? (
          <Link to={'/Checkout'}>
            <CartContainer>
              <ShoppingCart size={22} weight={'fill'} />
              {checkoutState.cart.length > 0 ? (
                <span>{checkoutState.cart.length}</span>
              ) : (
                ''
              )}
            </CartContainer>
          </Link>
        ) : (
          <CartContainer>
            <ShoppingCart size={22} weight={'fill'} />
            {checkoutState.cart.length > 0 ? (
              <span>{checkoutState.cart.length}</span>
            ) : (
              ''
            )}
          </CartContainer>
        )}
      </ActionContainer>
    </HeaderContainer>
  )
}
