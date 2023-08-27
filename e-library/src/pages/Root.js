import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/components/NavBar";

export const Root = () => {
   const path = useLocation();
   return (
      <Fragment>
         <NavBar pathname={path.pathname} />
         <Outlet />
      </Fragment>
   );
};
