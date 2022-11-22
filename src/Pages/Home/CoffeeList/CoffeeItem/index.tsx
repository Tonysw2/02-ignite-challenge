import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import * as zod from 'zod'
import { CartContext } from '../../../../contexts/CartContext'
import { BuyContainer, CoffeeTags, ListItem } from './styles'

export interface CoffeeOrder {
  id: string
  amount: number
  type: string
  price: number
}

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

interface CoffeeData {
  coffeeAmount: number
}

const CoffeeOrderValidationSchema = zod.object({
  coffeeAmount: zod.number().min(0),
})

export function CoffeeItem({ coffeeDetails }: CoffeeItemProps) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { coffeeAmount: 0 },
    resolver: zodResolver(CoffeeOrderValidationSchema),
  })
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCart(data: CoffeeData) {
    console.log(data)

    if (data.coffeeAmount === 0) return

    const coffeeOrder = {
      id: coffeeDetails.id,
      amount: data.coffeeAmount,
      type: coffeeDetails.type,
      price: coffeeDetails.price,
    }
    addCoffeeToCart(coffeeOrder)
    reset()
  }

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

      <BuyContainer onSubmit={handleSubmit(handleAddCoffeeToCart)}>
        <p>
          R$ <span>{coffeeDetails.price}</span>
        </p>

        <div>
          <input
            id="coffeeAmount"
            type="number"
            placeholder="0"
            min={0}
            {...register('coffeeAmount', { valueAsNumber: true })}
          />
          <button type="submit">
            <ShoppingCart size={22} weight={'fill'} />
          </button>
        </div>
      </BuyContainer>
    </ListItem>
  )
}
