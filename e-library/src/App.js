import './App.css';
import NavBar from './components/NavBar';
import ImageSection from './components/frontPageImage';
import ProductsContainer from './components/productContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageSection/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
