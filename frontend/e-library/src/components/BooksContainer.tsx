import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard } from ".";
import { RightArrowIcon } from "../icons";
import { BookInterface, BooksContainerInterface } from "../types";
import { shuffleArray } from "../utils";

const BooksContainer: React.FC<BooksContainerInterface> = ({ booksArray, categoryName, title }) => {
  const [shuffledBooks, setShuffledArray] = useState<BookInterface[]>();

  const navigator = useNavigate()

  useEffect(() => {
    setShuffledArray(shuffleArray(booksArray)?.slice(0, 9));
  }, [booksArray]);

  return (
    <div className="w-full h-full">
      <h1 className="text-xl px-4 z-10 sticky top-0 lg:top-0 bg-blue-100 lg:text-2xl font-bold my-3 text-start">
        {title}
        <span className="font-light mx-3 text-lg text-center">
          ({booksArray?.length} Books)
        </span>
      </h1>
      <div className="bookCardContainer flex w-screen max-h-[100%] overflow-x-auto overflow-y-hidden no-scrollbar">
        {shuffledBooks?.map((singleBookObject, index) => (
          <Fragment key={index}>
            <div className="mx-2 ">
              <BookCard {...singleBookObject} />
            </div>
          </Fragment>
        ))}

        {booksArray?.length < 6 ? ("") : (
          <div className=" w-[20rem] h-full flex justify-center items-center my-auto">
            <span
              onClick={() => navigator(`/category/${categoryName}`)}
              className={"border rounded-full p-3 text-3xl bg-blue-100 text-slate-500 transition duration-300 ease-in-out hover:text-black hover:bg-blue-200 cursor-pointer mr-5 mx-3 shadow-slate-300 shadow-xl"}>
              <RightArrowIcon />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksContainer;
