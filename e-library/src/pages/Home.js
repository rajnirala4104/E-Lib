import FrontPageImage from "../components/frontPageImage";
import ProductsContainer from "../components/productContainer";
import Footer from "../shared/components/Footer";

export const Home = (props) => {
   document.title = "E-Lib";
   return (
      <>
         <FrontPageImage />
         <ProductsContainer />
         <Footer />
      </>
   );
};
