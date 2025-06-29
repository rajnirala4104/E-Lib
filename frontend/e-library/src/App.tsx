import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./routers";
import { UserProfileInfoPopupContext } from "./context";
function App() {

  const [ userInfoProfilePopupON,setUserInfoProfilePopupOn] = useState<boolean>(false)

  return (
    <Fragment>
      <UserProfileInfoPopupContext.Provider value={{
          userInfoProfilePopupON, 
          setUserInfoProfilePopupOn
      }}>
        <RouterProvider router={_ROUTER} />
      </UserProfileInfoPopupContext.Provider>
    </Fragment>
  );
}

export default App;
