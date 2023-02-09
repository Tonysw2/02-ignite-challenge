import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import DeliveryImage from '../../assets/delivery.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export function Success() {
  const { checkoutState } = useContext(CheckoutContext)

  return (
    <section className=" max-w-[70rem] my-0 mx-auto">
      <h1 className="font-baloo font-extrabold text-2xl text-yellow700 ">
        Uhu! Pedido confirmado
      </h1>
      <p className="text-xl text-subtitle mb-10 ">
        Agora é só aguardar que o café chegará até você
      </p>

      <div className="grid grid-cols-2 gap-[6.375rem] ">
        <div className="flex items-center p-1 bg-gradient-to-r from-yellow500 to-purple700 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] ">
          <div className="flex flex-col justify-center gap-8 p-10 w-full h-full bg-background rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] ">
            <div className="flex items-center gap-3 ">
              <div className="flex items-center justify-center p-2 bg-purple700 rounded-full ">
                <MapPin size={16} weight="fill" className="text-white " />
              </div>

              <p className="text-text ">
                Entrega em
                <span className="font-bold ">{` ${checkoutState.adress.rua}, ${checkoutState.adress.número}`}</span>
                <br />
                {`${checkoutState.adress.bairro} - ${checkoutState.adress.cidade}, ${checkoutState.adress.estado}`}
              </p>
            </div>

            <div className="flex items-center gap-3 ">
              <div className="flex items-center justify-center p-2 bg-purple700 rounded-full ">
                <Timer size={16} className="text-white " />
              </div>

              <p className="text-text ">
                Previsão de entrega <br />{' '}
                <span className="font-bold ">20 min - 30 min</span>
              </p>
            </div>

            <div className="flex items-center gap-3 ">
              <div className="flex items-center justify-center p-2 bg-purple700 rounded-full ">
                <CurrencyDollar size={16} className="text-white " />
              </div>

              <p className="text-text ">
                Pagamento na entrega <br />
                <span className="font-bold last:capitalize">
                  {checkoutState.paymentMethod}
                </span>
              </p>
            </div>
          </div>
        </div>

        <img src={DeliveryImage} alt="" />
      </div>
    </section>
  )
}
