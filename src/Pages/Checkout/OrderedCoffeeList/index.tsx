import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { InputAmount } from '../../../components/InputAmount'
import { CartContext } from '../../../contexts/CartContext'
import { Actions, List } from './styles'

export function OrderedCoffeeList() {
  const { cart, removeOrderFromCart } = useContext(CartContext)

  return (
    <List>
      {cart.map((coffee) => {
        return (
          <li key={uuid()}>
            <div>
              <img src={`${coffee.type}.png`} alt="" />

              <Actions>
                <p>{coffee.name}</p>

                <div>
                  <InputAmount
                    amount={coffee.amount}
                    id={coffee.id}
                    onIncrease={() => {}}
                    onDecrease={() => {}}
                  />

                  <button
                    type="button"
                    onClick={() => removeOrderFromCart({ id: coffee.id })}
                  >
                    <Trash size={16} />
                    remover
                  </button>
                </div>
              </Actions>
            </div>

            <p>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(coffee.price)}
            </p>
          </li>
        )
      })}
    </List>
  )
}
