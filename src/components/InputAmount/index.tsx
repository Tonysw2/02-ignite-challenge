import { Minus, Plus } from 'phosphor-react'

import { InpuContainer } from './styles'

interface InputAmountProps {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function InputAmount({
  amount,
  onDecrease,
  onIncrease,
}: InputAmountProps) {
  return (
    <InpuContainer>
      <button type="button" onClick={onDecrease}>
        <Minus size={14} weight={'bold'} />
      </button>

      <input type="number" placeholder="0" value={amount} readOnly />

      <button type="button" onClick={onIncrease}>
        <Plus size={14} weight={'bold'} />
      </button>
    </InpuContainer>
  )
}
