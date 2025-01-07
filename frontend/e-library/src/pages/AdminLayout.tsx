import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export const AdminLayout: React.FC = () => {
  return (
    <Fragment>
      <div>AdminLayout</div>
      <Outlet />
    </Fragment>
  )
}
