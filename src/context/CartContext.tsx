'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, MarketCode } from '@/data/types';
import { MARKETS } from '@/data/markets';

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  getSubtotal: (marketCode: MarketCode) => number;
  getTax: (marketCode: MarketCode) => number;
  getTotal: (marketCode: MarketCode) => number;
  toastMessage: string | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'branda_v2_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Read initial cart from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
      }
    }
  }, [cart, isInitialized]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addItem = (newItemData: Omit<CartItem, 'id'>) => {
    // Generate deterministic ID based on service ID + sorted selected option choices
    const optionSignature = newItemData.selectedOptions
      .map((o) => `${o.groupName}:${o.choiceId}`)
      .sort()
      .join('|');
    const generatedId = `${newItemData.serviceId}-${optionSignature || 'default'}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === generatedId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + newItemData.quantity,
        };
        return updated;
      }
      return [...prev, { ...newItemData, id: generatedId }];
    });

    triggerToast(`Added "${newItemData.serviceName}" to cart`);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const getSubtotal = (marketCode: MarketCode) => {
    return cart.reduce((sum, item) => {
      const price = marketCode === 'us' ? item.unitPriceUSD : item.unitPriceNGN;
      return sum + price * item.quantity;
    }, 0);
  };

  const getTax = (marketCode: MarketCode) => {
    const market = MARKETS[marketCode] || MARKETS.ng;
    const subtotal = getSubtotal(marketCode);
    return subtotal * market.taxRate;
  };

  const getTotal = (marketCode: MarketCode) => {
    return getSubtotal(marketCode) + getTax(marketCode);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        getSubtotal,
        getTax,
        getTotal,
        toastMessage,
        dismissToast: () => setToastMessage(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
