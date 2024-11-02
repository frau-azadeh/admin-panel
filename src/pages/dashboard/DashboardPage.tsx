import React from 'react'
import Content from '../../components/layout/Content/Content'
import { useUser } from '../../context/UserContext';
const DashboardPage: React.FC = () => {
    const {user}=useUser();
  return (
    <div>
      <Content/>
      <p className='text-orange-500'>user: {user?.email}</p> 
    </div>
  )
}

export default DashboardPage
