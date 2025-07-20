import React, { Fragment, useContext, useEffect, useState } from 'react';
import { UserProfileInfoPopupContext } from '../context';
import { AdminInfoInterface } from '../types';

const UserInfoPopup: React.FC = () => {

  const [admin, setAdmin] = useState<AdminInfoInterface[]>()

  const {userInfoProfilePopupON, setUserInfoProfilePopupOn} = useContext(UserProfileInfoPopupContext)

  useEffect(() => {
    const localAdminData = JSON.parse(localStorage.getItem('adminInfo') as string);
    setAdmin([localAdminData[0].admin as AdminInfoInterface]);
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform animate-fade-in">
        {/* Header with gradient background */}
      
        {
          admin?.map((singleObj, index) => (
            <Fragment key={index}>
               <div className="bg-gradient-to-r from-cyan-800 to-blue-400  px-6 py-8 relative">
          {/* Close button */}
          <button
            onClick={() => setUserInfoProfilePopupOn(!userInfoProfilePopupON)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

              {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              {/* TODO: add avtar attribute to the backend */}
              <img
                src={singleObj.avatar}
                alt={singleObj.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
          {/* Basic Info */}
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-1">{singleObj.name}</h2>
            <p className="text-blue-100 text-sm font-medium">{singleObj.roll}</p>
          </div>
        </div>
        {/* Card Content */}
        <div className="px-6 py-6">
          {/* Contact Info */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">{singleObj.email}</span>
            </div>
          <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{singleObj.location}</span>
          </div>
        </div>
          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-semibold mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{singleObj.bio}</p>
          </div>
        </div>

            </Fragment>
          ))
        }

      </div>
    </div>
  );
};

export default UserInfoPopup;
