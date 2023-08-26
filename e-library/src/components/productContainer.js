import { useEffect, useState } from "react";
import bookData from "../mybooks.json";
import Card from "./BooksCard";
import Category from "./categorySection";

function ProductsContainer(props) {
   // ----- state for category ------
   const [catText, setCatText] = useState("all");
   const catClickedBtn = (catString) => setCatText(catString);

   const _BOOKNAMES = [];
   bookData.Books.forEach((bookDic) => {
      _BOOKNAMES.push(bookDic.BookName);
   });

   const [userBookInputName, setUseBookInputName] = useState("");
   const [bookList, setBookList] = useState(_BOOKNAMES);

   useEffect(() => {
      setBookList(
         _BOOKNAMES.filter((bookName) =>
            bookName.toLowerCase().includes(userBookInputName.toLowerCase())
         )
      );
   }, [userBookInputName]);

   const _SEARCHBOOKDATA = bookList.map((book) =>
      bookData.Books.find((boookDic) => boookDic.BookName === book)
   );

   return (
      <>
         <div className="productsCardContainer" id="booksContainer">
            <div className="productHeader container d-flex justify-content-center display-4">
               Books
               <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setUseBookInputName(e.target.value)}
               />
            </div>
            <br />
            <Category getCat={catClickedBtn} />
            <div className="cardContainer onlyCards">
               {_SEARCHBOOKDATA.map((bookDic, index) => {
                  if (bookDic.BookType === catText) {
                     return <Card key={index} {...bookDic} />;
                  } else if (catText === "all") {
                     return <Card key={index} {...bookDic} />;
                  }
               })}
            </div>
         </div>
      </>
   );
}

export default ProductsContainer;
