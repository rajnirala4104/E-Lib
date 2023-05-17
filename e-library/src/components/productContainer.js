import Card from "./BooksCard";

function ProductsContainer(props) {
    return (
        <>
            <div className="container productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <div class="productsCardContainer">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;