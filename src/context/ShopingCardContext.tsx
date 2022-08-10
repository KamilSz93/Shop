import { createContext, useContext, ReactNode } from "react";
import { useState } from 'react';
import  ShoppingCart  from '../components/ShoppingCart';

type ShoppingCardProviderProps = {
    children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
};

type ShoppingCardContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCardQuantity: (id: number) => void
    decreaseCardQuantity: (id: number) => void
    removeFromCard: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCardContext = createContext({} as
    ShoppingCardContext)

export function useShoppingCard () {
    return useContext(ShoppingCardContext)
}

export function ShoppingCardProvider({ children }:
    ShoppingCardProviderProps) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) =>
        item.quantity + quantity, 0);
    
    const closeCart = () => setIsOpen(false);
    const openCart = () => setIsOpen(true);
   
    function getItemQuantity(id:number) {
       return cartItems.find(item => item.id ===id)?.quantity || 0
    }

    function increaseCardQuantity(id: number) {
        setCartItems(currItems => {
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
      setCartItems((currItems) => {
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
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
   
    return (
      <ShoppingCardContext.Provider
        value={{
          getItemQuantity,
          increaseCardQuantity,
          decreaseCardQuantity,
          removeFromCard,
          openCart,
          closeCart,
          cartQuantity,
          cartItems,
        }}
      >
            {children}
            <ShoppingCart isOpen={isOpen} />
      </ShoppingCardContext.Provider>
    );
}