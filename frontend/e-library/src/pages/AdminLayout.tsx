import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuValueEnum } from '../types';

export const AdminLayout: React.FC = () => {
  
  const navigator = useNavigate();

  useEffect(() => {
    navigator(`/admin/${menuValueEnum.dashboard}`)
  }, [])

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
