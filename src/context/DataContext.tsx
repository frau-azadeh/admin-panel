import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataContextType,Item, DataProviderProps } from '../types/ContextType';
export const DataContext = createContext<DataContextType>({
  data: [],
  loading: true,
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get<Item[]>('https://6720b03f98bbb4d93ca58632.mockapi.io/api/loginuser/purchased');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

