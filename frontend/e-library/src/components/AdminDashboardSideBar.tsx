import React, { Fragment, useState } from 'react';
import { Users, ShoppingBag, BookOpen, DollarSign, TrendingUp, Package } from 'lucide-react';

// Sidebar component
const AdminDashboardSideBar:React.FC = () => {
  const [view, setView] = useState<'dashboard' | 'inventory' | 'orders'>('dashboard');
  
   return(
    <Fragment>
    <div className="bg-indigo-900 text-white w-64 py-6 flex flex-col h-screen">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold">BookStore Admin</h1>
      </div>
      <nav className="flex-1">
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'dashboard' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
          onClick={() => setView('dashboard')}
        >
          <TrendingUp className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </div>
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'inventory' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
          onClick={() => setView('inventory')}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          <span>Inventory</span>
        </div>
        <div 
          className={`flex items-center px-6 py-3 cursor-pointer ${view === 'orders' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
          onClick={() => setView('orders')}
        >
          <Package className="w-5 h-5 mr-3" />
          <span>Orders</span>
        </div>
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-indigo-800">
          <Users className="w-5 h-5 mr-3" />
          <span>Customers</span>
        </div>
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-indigo-800">
          <DollarSign className="w-5 h-5 mr-3" />
          <span>Finance</span>
        </div>
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-indigo-800">
          <ShoppingBag className="w-5 h-5 mr-3" />
          <span>Marketing</span>
        </div>
      </nav>
      <div className="px-6 mt-auto pt-6 border-t border-indigo-800">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
            <span className="font-bold">A</span>
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-indigo-300">admin@bookstore.com</p>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
 )};

export default AdminDashboardSideBar; 
