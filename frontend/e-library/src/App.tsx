import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { _ROUTER } from "./routers";
function App() {
  return (
    <Fragment>
      <RecoilRoot>
        <RouterProvider router={_ROUTER} />
      </RecoilRoot>
    </Fragment>
  );
}

export default App;
