import React, { Fragment, Suspense, useEffect, useState } from "react";
import { getBookByCategory } from "../api/services/books.service";
import { BooksContainer, Categories } from "../components";
import HeroSection from "../components/HeroSection";
import { SearchIcon } from "../icons";
import { BookInterface } from "../types";

export const Home: React.FC = () => {
  const [nonFictionalBooks, setNonFictionalBooks] = useState<BookInterface[]>();
  const [FictionalBooks, setFictionalBooks] = useState<BookInterface[]>();
  const [mysteryBooks, setMysteryBooks] = useState<BookInterface[]>();
  const [biographies, setBiographies] = useState<BookInterface[]>();
  const [spaceBooks, setSpaceBooks] = useState<BookInterface[]>();

  const getBooksByCategoryHandler = async (categoryName: string, setterFunctionOfState: React.Dispatch<React.SetStateAction<BookInterface[] | undefined>>) => {
    const response = await getBookByCategory(categoryName);
    setterFunctionOfState(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getBooksByCategoryHandler("fiction", setFictionalBooks);
    getBooksByCategoryHandler("Nonfiction", setNonFictionalBooks);
    getBooksByCategoryHandler("mystery", setMysteryBooks);
    getBooksByCategoryHandler("biography", setBiographies);
    getBooksByCategoryHandler("space", setSpaceBooks);
  }, []);

  return (
    <Fragment>
      <Suspense fallback={"loading.."}>
        <section className="w-full grid place-content-center place-items-center overflow-x-hidden no-scrollbar relative">
          <HeroSection />
          {/* --- start --- (make this div sticky)  */}
          <div className="w-full sticky top-0 bg-white hidden overflow-x-auto h-[4.5rem] border-b lg:flex">
            <div className="my-auto  h-full cursor-pointer place-content-center px-5 bg-gradient-to-r from-[rgba(0,162,195,0.26)] to-[rgba(0,0,0,0)] ">
              <SearchIcon />
            </div>
            <div className="flex overflow-x-auto no-scrollbar">
              <Categories />
            </div>
          </div>
          {/* ---- end --- */}
          <BooksContainer categoryName="fiction" title="Fictional Books" booksArray={FictionalBooks!} />
          <BooksContainer categoryName="nonfiction" title="Non-Fictional Book" booksArray={nonFictionalBooks!} />
          <BooksContainer categoryName="mystery" title="Mystery Book" booksArray={mysteryBooks!} />
          <BooksContainer categoryName="biography" title="Biographies" booksArray={biographies!} />
          <BooksContainer categoryName="space" title="Space" booksArray={spaceBooks!} />
        </section>
      </Suspense>
    </Fragment>
  );
};
