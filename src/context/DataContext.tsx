import React, { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

// تعریف نوع داده‌ای که از API دریافت می‌شود
interface Item {
  name: string;
  product: string;
  price: number;
  number: number;
}

// تعریف نوع داده برای کانتکست
interface DataContextType {
  data: Item[];
  loading: boolean;
}

// تعریف مقدار اولیه کانتکست
export const DataContext = createContext<DataContextType>({
  data: [],
  loading: true,
});

// تعریف نوع پراپ‌های provider
interface DataProviderProps {
  children: ReactNode;
}

// ایجاد Provider با استفاده از TypeScript
const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
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

export default DataProvider;