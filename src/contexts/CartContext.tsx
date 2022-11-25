import { createContext } from 'react'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
