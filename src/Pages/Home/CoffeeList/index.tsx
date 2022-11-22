import { v4 as uuid } from 'uuid'
import { coffeeListData } from '../../../DUMMY_DATA/CoffeeListData'
import { CoffeeItem } from './CoffeeItem'

import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <List>
        {coffeeListData.map((coffeeDetails) => (
          <CoffeeItem key={uuid()} coffeeDetails={coffeeDetails} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
