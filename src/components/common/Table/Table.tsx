import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Cardgrow: React.FC = () => {
  const { data, loading } = useContext(DataContext);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 p-3 w-full">
        <div className="w-full md:grow">
          <h5 className="text-white font-bold text-2xl my-5 border-b border-gray-300 pb-3">
            Most Popular Purchases:
          </h5>
          <table className="overflow-hidden w-full text-left bg-white rounded-lg shadow-md border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 ">
                <th className="p-4 text-gray-700 font-semibold">Name</th>
                <th className="p-4 text-gray-700 font-semibold">Product</th>
                <th className="p-4 text-gray-700 font-semibold">Price</th>
                <th className="p-4 text-gray-700 font-semibold">Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                  <td className="p-4">{item.name}</td>
                  <td className='p-4'>{item.product}</td>
                  <td className="p-4">{item.price}</td>
                  <td className="p-4">{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cardgrow;