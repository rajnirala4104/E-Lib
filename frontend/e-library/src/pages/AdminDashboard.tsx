import React, { Fragment, Suspense, useContext } from 'react';
import { AdminDashboardHeader, AdminDashboardSideBar, Customers, Dashboard, Finance, Inventory, Orders } from '../components';
import { UserProfileInfoPopupContext } from '../context';
import UserInfoPopup from '../components/UserInfoPopup';
import { useNavigate, useParams } from 'react-router-dom';
import { menuValueEnum } from '../types';
 
export const AdminDashboard: React.FC = () => {

  const {userInfoProfilePopupON} = useContext(UserProfileInfoPopupContext)
  const navigator = useNavigate();
  const {tab} = useParams();
  const isValidAdminTab =  Object.values(menuValueEnum).includes(tab as menuValueEnum);

  if(!tab || !isValidAdminTab){
    return (
      <Fragment>
        <div className="w-full h-[70vh] flex flex-col justify-center items-center">
          <span className="text-4xl">Page Not Found</span>
          <span 
            onClick={() => navigator('/admin/dashboard')} 
            className="text-blue-500 underline hover:text-blue-600 text-2xl cursor-pointer"
          >go to dashboard</span>
        </div>
      </Fragment>
    ) 
  }

  return (
    <Fragment>
      <Suspense fallback={"loading.."}>
        {userInfoProfilePopupON ? <UserInfoPopup /> : ""}
        <div className="flex bg-gray-100">
          <AdminDashboardSideBar />
          <div className="flex-1 w-[80%] h-screen flex flex-col overflow-auto">
            <AdminDashboardHeader/>
            <main className="flex-1 p-3 bg-gray-100">
              {tab === menuValueEnum.dashboard ? (<Dashboard />) : ("")}  
              {tab === menuValueEnum.inventory ? (<Inventory />) : ("")}
              {tab === menuValueEnum.customers ? (<Customers />) : ("")}
              {tab === menuValueEnum.orders ? (<Orders />) : ("")}
              {tab === menuValueEnum.finance ? (<Finance />) : ("")}
            </main>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

