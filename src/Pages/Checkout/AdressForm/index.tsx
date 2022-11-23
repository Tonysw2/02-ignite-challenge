import { MapPinLine } from 'phosphor-react'
import { AdressContainer, InputContainer } from './styles'

export function AdressForm() {
  return (
    <AdressContainer>
      <header>
        <MapPinLine size={22} />
        <p>
          Endereço de entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </p>
      </header>

      <InputContainer>
        <input type="text" id="cep" placeholder="CEP" />
        <input type="text" id="rua" placeholder="Rua" />
        <input type="text" id="número" placeholder="Número" />
        <input type="text" id="complemento" placeholder="Complemento" />
        <input type="text" id="bairro" placeholder="Bairro" />
        <input type="text" id="cidade" placeholder="Cidade" />
        <input type="text" id="estado" placeholder="UF" />
      </InputContainer>
    </AdressContainer>
  )
}
