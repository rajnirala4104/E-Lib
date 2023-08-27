import React, { Fragment, Suspense, useContext, useEffect } from "react";
import { CartCard } from "../components/CartCard";
import { CartContext } from "../context/cart.context";

export const CartList = () => {
   const { cart } = useContext(CartContext);
   useEffect(() => {
      document.title = "E-Lib Cart";
      console.log(cart);
   }, []);

   return (
      <Fragment>
         <Suspense fallback="ladding....">
            {cart.length !== 0
               ? cart.map((bookId, index) => (
                    <Fragment key={index}>
                       <CartCard BookId={bookId} />
                    </Fragment>
                 ))
               : "Oops Nothing to see here"}
         </Suspense>
      </Fragment>
   );
};
