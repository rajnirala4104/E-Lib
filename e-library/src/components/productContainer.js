import Card from "./BooksCard";
import Category from "./categorySection";
import images from "./images/allImages"
function ProductsContainer(props) {
    console.log(images.book_1)
    return (
        <>
            <div className="container productsCardContainer" id="booksContainer">
                <div className="productsSectionHeading display-4">
                    Books
                </div>
                <br />
                <Category/>
                <div class="productsCardContainer">
                    <Card imageSrc={images.book_1}/>
                    <Card imageSrc={images.book_2}/>
                    <Card imageSrc={images.book_3}/> 
                    <Card imageSrc={images.book_4}/>
                    <Card imageSrc={images.book_5}/>
                    <Card imageSrc={images.book_6}/>
                    <Card imageSrc={images.book_7}/>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer;