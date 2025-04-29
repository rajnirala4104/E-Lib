import React, { Fragment, useEffect, useState } from 'react';
import { adminLoginApiCall } from '../api/services/admin.service';
import Tooltip from "../components/Tooltip";
import { CloseEyeIcon, LoadingSpinnerIcon, OpenEyeIcon } from '../icons';
import { useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

export const AdminLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const navigator = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    try {
      const response = await adminLoginApiCall(formData.email, formData.password);
      localStorage.setItem("adminInfo", JSON.stringify([response.data.data]));
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localData = localStorage.getItem("adminInfo");
    if(localData){
      navigator('/admin')
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md m-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`mt-1 block w-full rounded-md px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              placeholder="admin@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className={`mt-1 block rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'
              } shadow-sm flex justify-start items-center focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}>
              <input
                id="password"
                type={hidePassword ? 'password' : 'text'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="outline-none w-full rounded-md px-3 py-2"
                placeholder="••••••••"
              />
              <div className='px-3  flex justify-center items-center'>
                {hidePassword ? (
                  <Fragment>
                    <Tooltip content="Show Password">
                      <span className='cursor-pointer text-xl text-center flex justify-center items-center' onClick={() => setHidePassword(!hidePassword)}>
                        <OpenEyeIcon classes='text-center my-auto' />
                      </span>
                    </Tooltip>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Tooltip content='Hide Password'>
                      <span className='cursor-pointer text-xl text-center flex justify-center items-center' onClick={() => setHidePassword(!hidePassword)}>
                        <CloseEyeIcon classes='text-center my-auto' />
                      </span>
                    </Tooltip>
                  </Fragment>
                )}
              </div>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            onClick={(e) => handleSubmit(e)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <LoadingSpinnerIcon />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
