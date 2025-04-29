import { Bell, ChevronDown, Search } from "lucide-react";
import React from "react";

const AdminDashboardHeader:React.FC = () => (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center rounded-md border border-gray-300 px-3 py-2 w-64 md:w-80">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="outline-none w-full text-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-500" />
            <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
          </button>
        </div>
        <div className="border-l border-gray-300 h-8 mx-4"></div>
        <div className="flex items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-2">
            <span className="font-bold">A</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
        </div>
      </div>
    </header>
  );

export default AdminDashboardHeader;
