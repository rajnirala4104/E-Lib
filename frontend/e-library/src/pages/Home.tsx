import React, { Fragment, useEffect, useState } from "react";
import { getBookByCategory } from "../api/services/books.service";
import { BooksContainer, Categories } from "../components";
import HeroSection from "../components/HeroSection";
import { SearchIcon } from "../icons";
import { BookInterface } from "../types";

export const Home: React.FC = () => {
  const [nonFictionalBooks, setNonFictionalBooks] = useState<BookInterface[]>();
  const [FictionalBooks, setFictionalBooks] = useState<BookInterface[]>();

  const getBooksByCategoryHandler = async (categoryName: string, setterFunctionOfState: React.Dispatch<React.SetStateAction<BookInterface[] | undefined>>) => {
    const response = await getBookByCategory(categoryName);
    setterFunctionOfState(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getBooksByCategoryHandler("fiction", setFictionalBooks);
    getBooksByCategoryHandler("Nonfiction", setNonFictionalBooks);
  }, []);

  return (
    <Fragment>
      <section className="w-full grid place-content-center place-items-center overflow-x-hidden no-scrollbar">
        <HeroSection />
        <div className="w-full hidden overflow-auto h-[4.5rem] border-b lg:flex relative">
          <div className="my-auto  h-full cursor-pointer place-content-center px-5 bg-gradient-to-r from-[rgba(0,162,195,0.26)] to-[rgba(0,0,0,0)] ">
            <SearchIcon />
          </div>
          <div className="flex overflow-x-auto no-scrollbar">
            <Categories />
          </div>
        </div>
        <BooksContainer categoryName="Fictionals Books" booksArray={FictionalBooks!} />
        <BooksContainer categoryName="Non-Fictional Book" booksArray={nonFictionalBooks!} />
      </section>
    </Fragment>
  );
};
