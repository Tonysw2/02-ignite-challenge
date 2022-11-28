import { MapPinLine } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { AdressContainer, InputContainer } from './styles'

export function AdressForm() {
  const { register } = useFormContext()

  function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value

    e.currentTarget.maxLength = 9
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/g, '$1-$2')
    e.currentTarget.value = value
  }

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
        <input
          {...register('cep')}
          onChange={handleCepChange}
          type="text"
          id="cep"
          placeholder="CEP - 00000-000"
          required
        />
        <input
          {...register('rua')}
          type="text"
          id="rua"
          placeholder="Rua"
          required
        />
        <input
          {...register('número')}
          type="text"
          id="número"
          placeholder="Número"
          required
        />
        <input
          {...register('complemento')}
          type="text"
          id="complemento"
          placeholder="Complemento"
        />
        <input
          {...register('bairro')}
          type="text"
          id="bairro"
          placeholder="Bairro"
          required
        />
        <input
          {...register('cidade')}
          type="text"
          id="cidade"
          placeholder="Cidade"
          required
        />
        <input
          {...register('estado')}
          maxLength={2}
          type="text"
          id="estado"
          placeholder="UF"
          required
        />
      </InputContainer>
    </AdressContainer>
  )
}
