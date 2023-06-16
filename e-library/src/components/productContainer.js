import Card from "./BooksCard";
import Category from "./categorySection";
import { useState } from "react";
import bookData from '../mybooks.json'

function ProductsContainer(props) {

    const [catText, setCatText] = useState("all")
    const catClickedBtn = (catString) => {
        setCatText(catString)
    }

    // console.log(catText)
    return (
        <>
            <div className="productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <br />
                <Category getCat={catClickedBtn} />
                <div className="productsCardContainer onlyCards">
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