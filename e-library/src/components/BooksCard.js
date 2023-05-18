import IMAGES from "./images/allImages"
// import {Link} from "react-router-dom"


function Card(props) {

    const addToCart = () => alert("ADDED TO CART")
    // const buyNow = () => alert("This is not Availible")

    return (
        <>
            <div className="card shadow">
                <div className="card-img-top booksImage" alt="Oops!!" style={{ backgroundImage: `url(${IMAGES.book_1})` }}></div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a className="btn btn-warning" href="buynow" >Buy Now</a>
                    <a className="btn btn-outline-warning mx-2" href="addtocart" onClick={addToCart}>Add to card</a>
                </div>
            </div>
        </>
    )
}

export default Card

