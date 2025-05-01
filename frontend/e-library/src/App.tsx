import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./routers";
function App() {
  return (
    <Fragment>
        <RouterProvider router={_ROUTER} />
    </Fragment>
  );
}

export default App;
