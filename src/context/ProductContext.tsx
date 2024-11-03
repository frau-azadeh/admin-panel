import React, { createContext, useEffect, useState} from "react";
import axios from 'axios';
import { Product, ProductProviderProps, ProductContextType} from "../types/ContextType";

export const ProductContext = createContext<ProductContextType>({
    dataProduct: [],
    loading: true,
});

export const ProductProvider: React.FC<ProductProviderProps> = ({children})=>{
    const[dataProduct,setDataProduct]= useState<Product[]>([]);
    const[loading, setLoading]= useState<boolean>(true);

    const fetchProduct = async() => {
        try{
            const respons = await axios.get<Product[]>('https://mp49843408c184742bf9.free.beeceptor.com/data/product');
            setDataProduct(respons.data);
        }
        catch(error){
            console.error("Error fetching data", error)
        }
        finally{
            setLoading(false);
        }
    }


useEffect(()=>{
    fetchProduct();
}, []);
return(
    <ProductContext.Provider value={{dataProduct, loading}}>
        {children}
    </ProductContext.Provider>
);
};
