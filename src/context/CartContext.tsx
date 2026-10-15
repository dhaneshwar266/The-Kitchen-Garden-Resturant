import React, { useState, useEffect } from 'react';
import type { MenuItem, CartItem } from '../types';
import { CartContext } from './CartContextBase';

const CART_STORAGE_KEY = 'kitchen_garden_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  };

  const addToCart = (menuItem: MenuItem, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map(item =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { menuItem, quantity }];
    });
    showToast(`Added "${menuItem.name}" to cart`);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.menuItem.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.menuItem.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItemsCount,
        subtotal,
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
