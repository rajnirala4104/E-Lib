import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./routers";
import { AdminSideBarViewStateContext, UserProfileInfoPopupContext } from "./context";
import { menuValueEnum } from "./types";
function App() {

  const [ userInfoProfilePopupON,setUserInfoProfilePopupOn] = useState<boolean>(false)
  const [view, setView] = useState<menuValueEnum | string>(menuValueEnum.dashboard);
  
  return (
    <Fragment>
      <UserProfileInfoPopupContext.Provider value={{
          userInfoProfilePopupON, 
          setUserInfoProfilePopupOn
      }}>
        <AdminSideBarViewStateContext.Provider value={{view, setView}}>
          <RouterProvider router={_ROUTER} />
        </AdminSideBarViewStateContext.Provider>
      </UserProfileInfoPopupContext.Provider>
    </Fragment>
  );
}

export default App;
