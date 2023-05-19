import Card from "./BooksCard";
import Category from "./categorySection";
import images from "./images/allImages"

function ProductsContainer(props) {
   
    return (
        <>
            <div className="container productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <br />
                <Category />
                <div className="productsCardContainer onlyCards">
                    <Card imageSrc={images.book_1} />
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;