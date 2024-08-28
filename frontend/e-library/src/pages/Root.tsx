import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const Root: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
