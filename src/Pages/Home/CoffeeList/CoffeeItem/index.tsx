import { ShoppingCart } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { InputAmount } from '../../../../components/InputAmount'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'
import { BuyContainer, CoffeeTags, ListItem } from './styles'

interface CoffeeDetails {
  type: string
  id: string
  tag: string[]
  name: string
  description: string
  price: number
}

interface CoffeeItemProps {
  coffeeDetails: CoffeeDetails
}

export function CoffeeItem({ coffeeDetails }: CoffeeItemProps) {
  const [amountInput, setAmountInput] = useState(0)
  const { addOrderToCart } = useContext(CheckoutContext)

  function increaseAmountInput() {
    setAmountInput((prev) => prev + 1)
  }

  function decreaseAmountInput() {
    setAmountInput((prev) => {
      return prev === 0 ? 0 : prev - 1
    })
  }

  function handleAddCoffeeToCart(event: FormEvent) {
    event.preventDefault()

    if (amountInput === 0) return

    addOrderToCart({
      id: coffeeDetails.id,
      type: coffeeDetails.type,
      name: coffeeDetails.name,
      amount: amountInput,
      price: coffeeDetails.price,
    })

    setAmountInput(0)
  }

  const splitedFormattedPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffeeDetails.price)

  return (
    <ListItem key={coffeeDetails.id}>
      <img src={`${coffeeDetails.type}.png`} alt="" />

      <CoffeeTags>
        {coffeeDetails.tag.map((tag) => (
          <p key={uuid()}>{tag}</p>
        ))}
      </CoffeeTags>

      <p>
        {coffeeDetails.name}
        <span>{coffeeDetails.description}</span>
      </p>

      <BuyContainer onSubmit={handleAddCoffeeToCart}>
        <p>{splitedFormattedPrice}</p>

        <div>
          <InputAmount
            amount={amountInput}
            onIncrease={increaseAmountInput}
            onDecrease={decreaseAmountInput}
          />

          <button type="submit">
            <ShoppingCart size={22} weight={'fill'} />
          </button>
        </div>
      </BuyContainer>
    </ListItem>
  )
}
