import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart.context";

function Card(props) {
   const { cart, setCart } = useContext(CartContext);

   const navigator = useNavigate();
   const changeRoute = (id) => {
      navigator("/buynow/" + id);
   };

   const addToCart = () => {
      setCart([...cart, props.BookName]);
   };

   return (
      <Fragment>
         <div className="card shadow">
            <img
               className="card-img-top booksImage"
               src={props.BookImage}
               alt="Oops!!"
            />
            <div className="card-body cardDetails ">
               <div className="aboutBookDiv">
                  <h5 className="card-title">{props.BookName}</h5>
                  <p className="card-text">{props.BookDescription}</p>
               </div>
               <div className="priceDetails">
                  <div className="prices flex">
                     <h5 className="card-title">
                        {props.price} |{" "}
                        <del style={{ color: "green" }}>
                           {props.discountPrice}
                        </del>
                     </h5>
                  </div>
                  <Link
                     className="btn btn-warning"
                     onClick={() => changeRoute(props.BookId)}
                  >
                     Buy Now
                  </Link>
                  <Link
                     className="btn btn-outline-warning mx-2"
                     onClick={addToCart}
                  >
                     Add to card
                  </Link>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

export default Card;
