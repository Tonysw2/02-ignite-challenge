import { Minus, Plus } from 'phosphor-react'

import { InpuContainer } from './styles'

interface InputAmountProps {
  amount: number
  id?: string
  onIncrease: (param?: any) => void
  onDecrease: (param?: any) => void
}

export function InputAmount({ ...rest }: InputAmountProps) {
  return (
    <InpuContainer>
      <button type="button" onClick={() => rest.onDecrease(rest.id)}>
        <Minus size={14} weight={'bold'} />
      </button>

      <input type="number" placeholder="0" value={rest.amount} readOnly />

      <button type="button" onClick={() => rest.onIncrease(rest.id)}>
        <Plus size={14} weight={'bold'} />
      </button>
    </InpuContainer>
  )
}
