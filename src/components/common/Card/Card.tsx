import React from 'react'
import { useUser } from '../../../context/UserContext';

const Table:React.FC = () => {
  const {user}=useUser();
  return (
    <div>
      <div className="flex flex-col w-full  md:flex-row gap-3 p-3">
  <div className="w-full  md:flex-none md:w-64 bg-white  rounded-lg p-10">
    <h2 className='text-center text-blue-300'>Number of Users:</h2>
    <h5 className='text-center text-blue-600 font-bold text-2xl'>100</h5>
  </div>
  <div className="w-full md:grow  bg-white  rounded-lg  p-10">
  <h2 className='text-center text-blue-300'>Number of Products:</h2>
  <h5 className='text-center text-blue-600 font-bold text-2xl'>{user?.email}</h5>
  </div>
  <div className="w-full md:flex-none md:w-64 bg-white  rounded-lg  p-10">
  <h2 className='text-center text-blue-300'>Number of Sales:</h2>
  <h5 className='text-center text-blue-600 font-bold text-2xl'>59</h5>

  </div>
</div>
    </div>
  )
}

export default Table;
