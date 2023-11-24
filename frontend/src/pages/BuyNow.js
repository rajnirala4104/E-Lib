import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookData from "../mybooks.json";
import "./css/buyNowPage.css";
export const BuyNowPage = (props) => {
   useEffect(() => {
      document.title = "E-Lib Buy Now";
   }, []);

   const paymentMethod = () =>
      alert("Oops!! Backend developer ne kuchh galti ki hai");
   const { bookId } = useParams();
   const books = bookData.Books.find(
      (book) => book.BookId.toString() === bookId
   );
   if (!books) {
      return (
         <Fragment>
            <div className="container d-flex shadow my-3 bg-warning text-white justify-content-center rounded display-2">
               Oops!!
            </div>
         </Fragment>
      );
   } else {
      return (
         <Fragment>
            <div className="buyknow">
               <div className="container showBookDetailsContainer ">
                  <div className="bookDetails">
                     <div className="bookImg">
                        <img src={books.BookImage} alt={books.BookName} />
                     </div>
                     <div className="bookContent">
                        <div className="bookName ">
                           <h3>{books.BookName}</h3>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit. Enim dolor fugiat placeat facilis atque
                           temporibus tenetur, quae esse iure neque!
                        </div>
                        <div className="spacificDetails">
                           <strong>Author</strong>: {books.BookAuthor}
                           <br />
                           <strong>Type</strong> : {books.BookType}
                           <br />
                        </div>
                     </div>
                  </div>
                  <div className="paymentMethod">
                     <div className="paymentContent">
                        <h2>Payment Details</h2>
                        <div className="paymentElements">
                           <div className="form-group mx-sm-3 mb-2">
                              <input
                                 type="number"
                                 className="form-control"
                                 id="cardNumber"
                                 placeholder="Card Number"
                              />
                           </div>
                           <div className="form-group mx-sm-3 mb-2">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="cardholdeName"
                                 placeholder="Cardholder Name"
                              />
                           </div>
                           <div className="cardDateDetails">
                              <div className="form-group mx-sm-3 mb-2">
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="exampleNum"
                                    placeholder="12"
                                 />
                              </div>

                              <div className="form-group mx-sm-3 mb-2">
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="exampleYeat"
                                    placeholder="2023"
                                 />
                              </div>

                              <div className="form-group mx-sm-3 mb-2">
                                 <label
                                    htmlFor="inputPassword2"
                                    className="sr-only"
                                 >
                                    Password
                                 </label>
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="CVV"
                                    placeholder="CVV"
                                 />
                              </div>
                           </div>
                           <div className="paymentBtns">
                              <button
                                 className="btn btn-warning mx-2"
                                 onClick={paymentMethod}
                              >
                                 Confirm and Pay {books.price}
                              </button>
                              <button className="btn btn-outline-warning">
                                 Cancel
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
};

export default BuyNowPage;
