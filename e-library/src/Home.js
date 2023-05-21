import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ImageSection from "./components/frontPageImage";
import ProductsContainer from "./components/productContainer";


const Home = (props) => {
    
    return (
        <>
            <NavBar />
            <ImageSection />
            <ProductsContainer buyNow={props.buyNow}/>
            <Footer/>
        </>
    )
}


export default Home;