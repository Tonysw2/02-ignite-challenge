import { CurrencyDollar } from 'phosphor-react'
import { v4 as uuid } from 'uuid'
import { PaymentMethodsType } from '../Checkout'

interface PaymentProps {
  paymentMethods: PaymentMethodsType[]
  handleToggleActivePaymentMethod: (e: MouseEvent) => void
}

export function Payment({
  paymentMethods,
  handleToggleActivePaymentMethod,
}: PaymentProps) {
  return (
    <div className="flex flex-col justify-center gap-8 p-10 bg-card rounded-md ">
      <header className="flex items-start justify-start gap-2 ">
        <CurrencyDollar className="text-purple500 " size={22} />
        <p className="flex flex-col items-start justify-center gap-[0.125rem] text-subtitle ">
          Pagamento
          <span className="text-sm text-text ">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </p>
      </header>

      <div className="grid grid-cols-3 items-center gap-[0.875rem] ">
        {paymentMethods.map((method) => (
          <button
            key={uuid()}
            className={`${
              method.active
                ? 'bg-purple300 outline outline-1 outline-purple700 '
                : 'bg-button hover:bg-hover '
            } flex items-center justify-start gap-3 rounded-md p-4 text-xs text-text leading-2 uppercase cursor-pointer hover:transition-all hover:duration-200 `}
            type="button"
            onClick={handleToggleActivePaymentMethod}
          >
            {method.icon}
            {method.name}
          </button>
        ))}
      </div>
    </div>
  )
}
