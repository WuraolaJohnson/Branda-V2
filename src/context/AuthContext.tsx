'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile, Order } from '@/data/types';
import { MOCK_USER } from '@/data/users';
import { INITIAL_MOCK_ORDERS } from '@/data/orders';

interface AuthContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  orders: Order[];
  login: (email: string) => boolean;
  loginDemo: () => boolean;
  logout: () => void;
  register: (fullName: string, email: string, phone: string) => boolean;
  addOrder: (order: Order) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'branda_v2_user';
const ORDERS_STORAGE_KEY = 'branda_v2_orders';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<Order[]>(INITIAL_MOCK_ORDERS);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch (e) {
      console.error('Failed loading auth/orders state:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        if (user) {
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
      } catch (e) {
        console.error('Failed saving auth/orders state:', e);
      }
    }
  }, [user, orders, isInitialized]);

  const login = (email: string) => {
    const loggedInUser: UserProfile = {
      ...MOCK_USER,
      email: email || MOCK_USER.email,
      fullName: email.toLowerCase().includes('demo')
        ? 'Demo Enterprise User'
        : email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    };
    setUser(loggedInUser);
    return true;
  };

  const loginDemo = () => {
    const demoUser: UserProfile = {
      ...MOCK_USER,
      fullName: 'Demo Enterprise User',
      email: 'demo@branda.com',
      companyName: 'Apex Creative Studio (Demo)',
    };
    setUser(demoUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const register = (fullName: string, email: string, phone: string) => {
    const newUser: UserProfile = {
      id: `usr_${Math.floor(10000 + Math.random() * 90000)}`,
      fullName,
      email,
      phone,
      defaultMarket: 'ng',
      savedAddresses: [],
    };
    setUser(newUser);
    return true;
  };

  const addOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        orders,
        login,
        loginDemo,
        logout,
        register,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
