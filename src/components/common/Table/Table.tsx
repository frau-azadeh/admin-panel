import React from 'react';

const Cardgrow = () => {
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
                <th className="p-4 text-gray-700 font-semibold">Price</th>
                <th className="p-4 text-gray-700 font-semibold">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Pen</td>
                <td className="p-4">450.000</td>
                <td className="p-4">8</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Flower</td>
                <td className="p-4">1.000.000</td>
                <td className="p-4">5</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Book</td>
                <td className="p-4">500.000</td>
                <td className="p-4">3</td>
              </tr>
              <tr className="border-b border-gray-200  hover:bg-gray-800 hover:text-white">
                <td className="p-4">Notebook</td>
                <td className="p-4">600.000</td>
                <td className="p-4">6</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Mobile</td>
                <td className="p-4">56.000.000</td>
                <td className="p-4">1</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Watch</td>
                <td className="p-4">650.000</td>
                <td className="p-4">1</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Liter</td>
                <td className="p-4">56.000</td>
                <td className="p-4">3</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white" >
                <td className="p-4 ">Pencil</td>
                <td className="p-4">45.000</td>
                <td className="p-4">2</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Ruler</td>
                <td className="p-4">69.000</td>
                <td className="p-4">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:grow">
          <h5 className="text-white font-bold text-2xl my-5 border-b border-gray-300 pb-3">
            Most Purchased Items:
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
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Ali</td>
                <td className="p-4">Pen</td>
                <td className="p-4">450.000</td>
                <td className="p-4">8</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Mahdi</td>
                <td className="p-4">Flower</td>
                <td className="p-4">1.000.000</td>
                <td className="p-4">5</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Sanaz</td>
                <td className="p-4">Book</td>
                <td className="p-4">500.000</td>
                <td className="p-4">3</td>
              </tr>
              <tr className="border-b border-gray-200  hover:bg-gray-800 hover:text-white">
                <td className="p-4">Ali Hassan</td>
                <td className="p-4">Notebook</td>
                <td className="p-4">600.000</td>
                <td className="p-4">6</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Amir Ali</td>
                <td className="p-4">Mobile</td>
                <td className="p-4">56.000.000</td>
                <td className="p-4">1</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Ali Mohammad</td>
                <td className="p-4">Watch</td>
                <td className="p-4">650.000</td>
                <td className="p-4">1</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
              <td className="p-4">Sahar</td>
                <td className="p-4">Liter</td>
                <td className="p-4">56.000</td>
                <td className="p-4">3</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white" >
                <td className="p-4">Sara</td>
                <td className="p-4 ">Pencil</td>
                <td className="p-4">45.000</td>
                <td className="p-4">2</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-800 hover:text-white">
                <td className="p-4">Ahmad</td>
                <td className="p-4">Ruler</td>
                <td className="p-4">69.000</td>
                <td className="p-4">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>
  );
};

export default Cardgrow;