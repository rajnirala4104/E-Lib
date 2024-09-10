import React, { Fragment, useEffect, useState } from "react";
import { getBookByCategory } from "../api/services/books.service";
import { BooksContainer } from "../components";
import { BookInterface } from "../types";

export const Home: React.FC = () => {
  const [nonFictionalBooks, setNonFictionalBooks] = useState<BookInterface[]>();
  const [FictionalBooks, setFictionalBooks] = useState<BookInterface[]>();

  const getBooksByCategoryHandler = async (
    categoryName: string,
    setterFunctionOfState: React.Dispatch<
      React.SetStateAction<BookInterface[] | undefined>
    >,
  ) => {
    const response = await getBookByCategory(categoryName);
    setterFunctionOfState(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getBooksByCategoryHandler("fiction", setFictionalBooks);
    getBooksByCategoryHandler("non-fiction", setNonFictionalBooks);
  }, []);

  return (
    <Fragment>
      <section className="w-full grid place-content-center place-items-center">
        <BooksContainer
          categoryName="Fictionals Books"
          booksArray={FictionalBooks!}
        />
        <BooksContainer
          categoryName="Non-Fictional Book"
          booksArray={nonFictionalBooks!}
        />
      </section>
    </Fragment>
  );
};
