import React from "react";
import { BookInterface } from "../types";

const BookCard: React.FC<BookInterface> = () => {
  return (
    <div className="mt-6 w-[20rem] my-4 mx-3 rounded-lg shadow-lg flex flex-col  justify-center items-center p-3">
      <div className="w-[13rem] -translate-y-10 shadow-lg rounded-lg">
        <img
          src="https://m.media-amazon.com/images/I/71FZ5cRenkL._AC_UF1000,1000_QL80_.jpg"
          alt="E-Lib Book"
          className="w-full rounded-md "
        />
      </div>
      <div className="">
        <div className="-mt-2 mb-2">
          <h2 className="text-xl">The Perks of Being a Wallflower</h2>
        </div>
        <div className="my-2">
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, harum
            facilis inventore earum perferendis velit? Consequatur dicta quod
            quasi similique?
          </p>
        </div>
        <div>
          <span>Price: $4</span>
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
