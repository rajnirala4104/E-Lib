import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Replace with your actual auth check logic
      const token = localStorage.getItem('adminInfo');
      setIsAuthenticated(!!token);
    } finally {
      setIsLoading(false);
    }
  };

  return { isAuthenticated, isLoading };
};
