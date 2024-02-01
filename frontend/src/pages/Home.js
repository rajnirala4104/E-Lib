import { Fragment, useEffect } from "react";
import FrontPageImage from "../components/frontPageImage";
import ProductsContainer from "../components/productContainer";
import Footer from "../shared/components/Footer";
import { AppState } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
   document.title = "E-Lib";

   const { _user, set_user } = AppState()
   const navigator = useNavigate()

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (!userInfo) {
         navigator('/account')
      }
      set_user(userInfo)
   }, [])


   return (
      <Fragment>
         <FrontPageImage />
         <ProductsContainer />
         <Footer />
      </Fragment>
   );
};
