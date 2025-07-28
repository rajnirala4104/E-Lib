import React, { Fragment, Suspense, useContext } from 'react';
import { AdminDashboardHeader, AdminDashboardSideBar } from '../components';
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
          <div className="flex-1 flex flex-col">
            <AdminDashboardHeader/>
            <main className="flex-1 p-6 bg-gray-100">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Content Area</h2>
                <p className="text-gray-600">
                  This is where your main dashboard content would go. Currently showing {tab}
                </p>
              </div>
            </main>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

