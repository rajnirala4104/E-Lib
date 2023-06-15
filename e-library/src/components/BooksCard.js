import { Link } from "react-router-dom"

function Card(props) {

    const addToCart = () => alert("ADDED TO CART")

    // console.log(props.nowCatText)
    return (
        <>
            <div className="card shadow">
                <img className="card-img-top booksImage" src={props.bookImage} alt="Oops!!" />
                <div className="card-body">
                    <h5 className="card-title">{props.bookName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <div className="prices flex">
                        <h5 className="card-title">{props.bookPrice} | <del style={{ color: "green" }}>{props.bookDiscountPrice}</del></h5>
                    </div>
                    <Link className="btn btn-warning" to="/buynow" >Buy Now</Link>
                    <Link className="btn btn-outline-warning mx-2" to="addtocart" onClick={addToCart}>Add to card</Link>
                </div>
            </div>
        </>
    )
}

export default Card