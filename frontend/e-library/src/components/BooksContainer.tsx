import React, { Fragment, useEffect, useState } from "react";
import { BookCard } from ".";
import { BookInterface, BooksContainerInterface } from "../types";
import { shuffleArray } from "../utils";

const BooksContainer: React.FC<BooksContainerInterface> = ({
  booksArray,
  categoryName,
}) => {
  const [shuffledBooks, setShuffledArray] = useState<BookInterface[]>();

  useEffect(() => {
    setShuffledArray(shuffleArray(booksArray)?.slice(0, 9));
  }, [booksArray]);

  return (
    <div className="w-full h-full">
      <h1 className="text-2xl px-4 font-bold my-3 text-start">
        {categoryName}
        <span className="font-light mx-3 text-lg text-center">
          ({booksArray?.length} Books)
        </span>
      </h1>
      <div className="bookCardContainer flex w-screen max-h-[100%] overflow-x-auto overflow-y-hidden no-scrollbar">
        {shuffledBooks?.map((singleBookObject, index) => (
          <Fragment key={index}>
            <BookCard {...singleBookObject} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;
