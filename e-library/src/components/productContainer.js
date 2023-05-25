import Card from "./BooksCard";
import Category from "./categorySection";
import { useState } from "react";

function ProductsContainer(props) {

    const [catText, setCatText] = useState("all")
    const catClickedBtn = (catString)=>{
        setCatText(catString)
    }

    console.log(catText)
    return (
        <>
            <div className="productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <br />
                <Category getCat={catClickedBtn}/>
                <div className="productsCardContainer onlyCards">
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;