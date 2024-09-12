import React from "react";
import { BookInterface } from "../types";

const BookCard: React.FC<BookInterface> = (props) => {
  return (
    <div className="mt-6 w-[20rem] my-4 mx-3 rounded-lg shadow-lg flex flex-col  justify-start items-center p-3">
      <div className="w-[13rem] -translate-y-10 shadow-lg rounded-lg">
        <img
          src={props.image}
          alt="E-Lib Book"
          className="w-full rounded-md "
        />
      </div>
      <div className="">
        <div className="-mt-2 mb-2">
          <h2 className="text-xl">{props.title}</h2>
        </div>
        <div className="my-2">
          <p className="text-[12px] ">{props.description}</p>
        </div>
        <div>
          <span>Price: ${props.price}</span>
        </div>
        <div className="mt-2">
          <button className="bg-blue-300 px-2 py-1 rounded-md text-sm">
            Buy Now
          </button>
          <button className="border border-blue-800 rounded-md py-1 px-2 mx-2 text-sm">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
