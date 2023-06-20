import Card from "./BooksCard";
import Category from "./categorySection";
import { useState } from "react";
import bookData from '../mybooks.json'

function ProductsContainer(props) {

    const [catText, setCatText] = useState("all")
    const catClickedBtn = (catString) => {
        setCatText(catString)
    }
    return (
        <>
            <div className="productsCardContainer" id="booksContainer">
                <div className="container d-flex justify-content-center display-4">
                    Books
                </div>
                <br />
                <Category getCat={catClickedBtn} />
                <div className=" onlyCards">
                    {bookData.Books.map((bookDic, index) => {
                        if (bookDic.BookType === catText) {
                            return (
                                <Card key={index} {...bookDic}/>
                            )
                        } else if (catText === "all") {
                            return (
                                <Card key={index} {...bookDic}/>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;