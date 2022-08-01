import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, ReactNode } from "react";
import { useState } from 'react';
type ShoppingCardProviderProps = {
    children: ReactNode
}

type ShoppingCardContext = {
    getItemQuantity: (id: number) => void
    increaseCardQuantity: (id: number) => void
    decreaseCardQuantity: (id: number) => void
    removeFromCard: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCardContext = createContext({} as
    ShoppingCardContext)

export function useShoppingCard () {
    return useContext(ShoppingCardContext)
}

export function ShoppingCardProvider({ children }:
    ShoppingCardProviderProps) {
    
    const [cartItem, setCartItem] = useState<CartItem[]>([]); 
   
    function getItemQuantity(id:number) {
       return cartItem.find(item => item.id ===id)?.quantity || 0
   }
   
    return (
     <ShoppingCardContext.Provider value={{}} >
        {children}
     </ShoppingCardContext.Provider>)
}