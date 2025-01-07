import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export const AdminDashboard: React.FC = () => {
  return (
    <Fragment>
      <div>AdminDashboard</div>
      <Outlet />
    </Fragment>
  )
}
