import React, { Fragment, useEffect, useState } from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Package } from 'lucide-react';
import { AdminInfoInterface, menuValueEnum } from '../types';
import { useNavigate } from 'react-router-dom';


// Sidebar component
const AdminDashboardSideBar:React.FC = () => {
  const [view, setView] = useState<menuValueEnum>(menuValueEnum.dashboard);
  const [localData, setLocalData] = useState<AdminInfoInterface>()
  const navigator = useNavigate()
 
  useEffect(() => {
    const localAdminData = JSON.parse(localStorage.getItem('adminInfo') as string);
    setLocalData(localAdminData[0].admin)
  },[])

  useEffect(() => {
    navigator(`/admin/${view}`)    
  }, [view])

   return(
    <Fragment>
    <div className="bg-cyan-900 text-white w-64 py-6 flex flex-col h-screen">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold">E-Lib Dashboard</h1>
      </div>
      <nav className="flex-1">
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'dashboard' ? 'bg-cyan-800' : 'hover:bg-cyan-800'}`}
          onClick={() => setView(menuValueEnum.dashboard)}
        >
          <TrendingUp className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </div>
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'inventory' ? 'bg-cyan-800' : 'hover:bg-cyan-800'}`}
          onClick={() => setView(menuValueEnum.inventory)}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          <span>Inventory</span>
        </div>
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'orders' ?  'bg-cyan-800' : 'hover:bg-cyan-800'}`}
          onClick={() => setView(menuValueEnum.orders)}
        >
          <Package className="w-5 h-5 mr-3" />
          <span>Orders</span>
        </div>
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'customers' ?  'bg-cyan-800' : 'hover:bg-cyan-800'}`}
          onClick={() => setView(menuValueEnum.customers)}
          >
          <Users className="w-5 h-5 mr-3" />
          <span>Customers</span>
        </div>
        <div 
          className= {`flex items-center px-6 py-3 cursor-pointer ${view === 'finance' ?  'bg-cyan-800' : 'hover:bg-cyan-800'}`}

          onClick={() => setView(menuValueEnum.finance)}
          >
          <DollarSign className="w-5 h-5 mr-3" />
          <span>Finance</span>
        </div>
      </nav>
      <div className="px-6 mt-auto pt-6 border-t border-cyan-800">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center mr-3">
            <span className="font-bold">{localData?.name[0]}</span>
          </div>
          <div>
            <p className="text-sm font-medium">{localData?.name}</p>
            <p className="text-xs text-cyan-300">{localData?.email}</p>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
 )};

export default AdminDashboardSideBar; 
