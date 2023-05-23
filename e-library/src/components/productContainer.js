import Card from "./BooksCard";
import Category from "./categorySection";

function ProductsContainer(props) {
    return (
        <>
            <div className="productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <br />
                <Category />
                <div className="productsCardContainer onlyCards">
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;