import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { BuySomthingContextType, BuySomthingProviderProps,Buy } from "../types/ContextType";
export const BuySomthingContext = createContext<BuySomthingContextType>({
    buy: [],
    loading:true,
});

export const BuySomthingProvider: React.FC<BuySomthingProviderProps> = ({children}) =>{
    const [buy, setBuy]=useState<Buy[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () =>{
        try{
            const response=await axios.get<Buy[]>('https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/product');
            setBuy(response.data);
        }
        catch(error){
            console.error("error", error);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <BuySomthingContext.Provider value={{buy, loading}}>
            {children}
        </BuySomthingContext.Provider>
    );
};