import NavBar from "./components/NavBar";
import ImageSection from "./components/frontPageImage";
import ProductsContainer from "./components/productContainer";


const Home = () => {
    return (
        <>
            <NavBar/>
            <ImageSection />
            <div className="container">
                <ProductsContainer />
            </div>
        </>
    )
}


export default Home;