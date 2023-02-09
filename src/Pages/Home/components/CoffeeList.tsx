import { v4 as uuid } from 'uuid'
import { coffeeListData } from '../../../DUMMY_DATA/CoffeeListData'
import { CoffeeItem } from './CoffeeItem'

export function CoffeeList() {
  return (
    <ul className="flex flex-wrap items-center gap-y-10 gap-x-8">
      {coffeeListData.map((coffeeDetails) => (
        <CoffeeItem key={uuid()} coffeeDetails={coffeeDetails} />
      ))}
    </ul>
  )
}
