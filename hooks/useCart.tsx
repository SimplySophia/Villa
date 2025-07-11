"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
};

type CartContextType = {
  cart: CartItem[];
  toggleCart: (item: CartItem) => void;
  isInCart: (id: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const toggleCart = (item: CartItem) => {
    const exists = cart.some((i) => i.id === item.id);
    if (exists) {
      setCart(cart.filter((i) => i.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  const isInCart = (id: string) => cart.some((i) => i.id === id);

  return (
    <CartContext.Provider value={{ cart, toggleCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
