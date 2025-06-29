import React, { Fragment, useContext } from 'react';
import { AdminDashboardHeader, AdminDashboardSideBar } from '../components';
import { UserProfileInfoPopupContext } from '../context';
import UserInfoPopup from '../components/UserInfoPopup';
 
export const AdminDashboard: React.FC = () => {

  const {userInfoProfilePopupON} = useContext(UserProfileInfoPopupContext)

  return (
    <Fragment>
      {userInfoProfilePopupON ? <UserInfoPopup /> : ""}
      <div className="flex bg-gray-100">
        <AdminDashboardSideBar />
        <div className="flex-1 flex flex-col">
          <AdminDashboardHeader/>
          <main className="flex-1 p-6 bg-gray-100">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Content Area</h2>
              <p className="text-gray-600">
                This is where your main dashboard content would go. Currently showing: 
              </p>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

