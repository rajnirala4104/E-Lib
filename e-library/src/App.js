import './App.css';
import { useState } from "react"
import About from './components/About'
import BuyNowPage from './components/BuyNow';
import NoPage from './components/NoPage';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  const [perticularBookDetails, setPerticularBookDetails] = useState({})
  const buyNow = (bookDetails) => {
    console.log(bookDetails)
    setPerticularBookDetails(bookDetails)
    console.log(perticularBookDetails)
    return bookDetails
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/buynow" element={<BuyNowPage />} />
        <Route exact path="/*" element={<NoPage />} />
        <Route exact path="/" element={<Home buyNow={buyNow} />} />
      </Routes>
    </div>
  );
}

export default App;
