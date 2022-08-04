import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, ReactNode } from "react";
import { useState } from 'react';

type ShoppingCardProviderProps = {
    children: ReactNode
}

type ShoppingCardContext = {
    getItemQuantity: (id: number) => number
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

    function increaseCardQuantity(id: number) {
        setCartItem(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return{...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCardQuantity(id: number) {
      setCartItem((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    }

    function removeFromCard(id: number) {
        setCartItem(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
   
    return (
        <ShoppingCardContext.Provider value={{ getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCard}} >
        {children}
     </ShoppingCardContext.Provider>)
}