import React, { Fragment, useEffect, useState } from "react";
import bookData from "../mybooks.json";
import Card from "./BooksCard";
import Category from "./categorySection";
import { getAllBooks } from "../api/services/books.service";

function ProductsContainer(props) {
  // ----- state for category ------
  const [catText, setCatText] = useState("all");
  const catClickedBtn = (catString) => setCatText(catString);

  const [allBooks, setAllBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await getAllBooks();
    // console.log(data.data);
    setAllBooks(data.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <React.Fragment>
      <div className="productsCardContainer" id="booksContainer">
        <div className="productHeader container d-flex justify-content-center display-4">
          Books
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          // onChange={(e) => setUseBookInputName(e.target.value)}
          />
        </div>
        <br />
        <Category getCat={catClickedBtn} />
        <div className="cardContainer onlyCards">
          {allBooks.map((singleBookObject) => (
            <Fragment key={singleBookObject._id}>
              <Card {...singleBookObject} />
            </Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductsContainer;
