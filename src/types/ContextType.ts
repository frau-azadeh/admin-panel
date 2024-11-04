import { ReactNode } from "react";
export interface User{
    email: string;
}
export interface UserContextType{
    user: User|null;
    setUser: (user: User|null)=>void;
}
export interface Product{
    name: string;
    family: string;
    price: number;
    number: number;
}
export interface ProductProviderProps{
    children: ReactNode;
}
export interface ProductContextType {
    dataProduct: Product[];
    loading: boolean;
}

export interface DataProviderProps {
    children: ReactNode;
  }

  export interface Item {
    name: string;
    product: string;
    price: number;
    number: number;
  }
  
  export interface DataContextType {
    data: Item[];
    loading: boolean;
  }
  
  export interface Buy{
    product: string;
    price: number;
    number: number;
  }
  
  export interface BuySomthingContextType{
    buy: Buy[];
    loading: boolean;
  }

  export interface BuySomthingProviderProps{
    children: ReactNode;
  }