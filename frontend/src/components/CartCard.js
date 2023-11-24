import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import BooksData from "../mybooks.json";

export const CartCard = (props) => {
   const { cart } = useContext(CartContext);

   return <div>CartCard {props.BookId}</div>;
};
