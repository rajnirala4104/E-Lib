import React, { Fragment } from "react";
import { BookCard } from "../components";

export const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="w-full grid place-content-center place-items-center">
        <div className="w-full h-full">
          <h1 className="text-2xl px-4 font-bold my-3">Novels</h1>
          <div className="bookCardContainer flex w-screen max-h-[100%] overflow-x-auto overflow-y-hidden">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
        <div className="w-full h-full">
          <h1 className="text-2xl px-4 font-bold my-3">Novels</h1>
          <div className="bookCardContainer flex w-screen max-h-[100%] overflow-x-auto overflow-y-hidden">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
