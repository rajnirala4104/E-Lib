import { Bell, Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { UserProfileInfoPopupContext } from "../context";
import { AdminInfoInterface } from "../types";

const AdminDashboardHeader:React.FC = () => {

  const {userInfoProfilePopupON, setUserInfoProfilePopupOn} = useContext(UserProfileInfoPopupContext)
  const [localData, setLocalData] = useState<AdminInfoInterface>()
 
  useEffect(() => {
    const localAdminData = JSON.parse(localStorage.getItem('adminInfo') as string);
    setLocalData(localAdminData[0].admin)
  },[])

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
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
        <Tooltip content="Notification" position="bottom">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-500" />
            <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
          </button>
        </Tooltip>
        </div>
        <div className="border-l border-gray-300 h-8 mx-4"></div>
        <Tooltip content="User Profile" position="bottom">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setUserInfoProfilePopupOn(!userInfoProfilePopupON)}
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-2">
              <span className="font-bold">{localData?.name[0]}</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">{localData?.name}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </Tooltip>
      </div>
    </header>
  )}

export default AdminDashboardHeader;
