import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Card from '../../common/Card/Card';
import Table from '../../common/Table/Table';
import Report from '../../common/Report/Report';
import TableProduct from '../../common/TableProduct/TableProduct'
const Content = () => {
  return (
    <div>
      <div className='flex w-full relative '>
      <Sidebar/>
            <div className='grow lg:ml-60  bg-gray-800 h-auto '>
            <main className="main flex-col  transition-all duration-150 ease-in pb-20">
         
                <Card/>
                <Table/>
                <TableProduct/>
                <Report/>
            </main>
            </div>
      </div>
          
           
        
    </div>
  )
}

export default Content;
