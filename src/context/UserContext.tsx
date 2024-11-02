import React, {useState, useContext, createContext, ReactNode} from 'react';
import { User, UserContextType } from '../types/ContextType';

const UserContext=createContext<UserContextType| undefined>(undefined);

export const UserProvider:React.FC<{children:ReactNode}>=({children}) =>{
  const [user, setUser] =useState<User | null>(null);
  
  return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  );
}
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
  };

