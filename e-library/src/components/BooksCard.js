import { Link, useNavigate, useParams } from "react-router-dom"

function Card(props) {

    const addToCart = () => alert("ADDED TO CART")
    const navigator = useNavigate()
    const { bookId } = useParams()
    const changeRoute = (id) => {
        navigator("/buynow/" + id)
        console.log(bookId)
    }

    return (
        <>
            <div className="card shadow">
                <img className="card-img-top booksImage" src={props.BookImage} alt="Oops!!" />
                <div className="card-body cardDetails ">
                    <div className="aboutBookDiv">
                        <h5 className="card-title">{props.BookName}</h5>
                        <p className="card-text">{props.BookDescription}</p>
                    </div>
                    <div className="priceDetails">
                        <div className="prices flex">
                            <h5 className="card-title">{props.price} | <del style={{ color: "green" }}>{props.discountPrice}</del></h5>
                        </div>
                        <Link className="btn btn-warning" onClick={() => changeRoute(props.BookId)} >Buy Now</Link>
                        <Link className="btn btn-outline-warning mx-2" onClick={addToCart}>Add to card</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card