import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart.context";
import BooksData from "../mybooks.json";

export const CartCard = (props) => {
   const { cart } = useContext(CartContext);
   const [finalCart, setFinalCart] = useState([]);

   useEffect(() => {
      BooksData.Books.filter((bookDic) => {
         const _finalCart = [];

         cart.forEach((bookName) => {
            if (bookName === bookDic.BookName) {
               console.log(bookName, bookDic);
               _finalCart.push(bookDic);
            }
         });
         setFinalCart(_finalCart);
      });
   }, [cart]);

   console.log(finalCart);
   return <div>CartCard {props.BookId}</div>;
};
