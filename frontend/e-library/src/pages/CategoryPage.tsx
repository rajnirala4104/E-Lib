import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookByCategory } from "../api/services/books.service";
import { BookCard } from "../components";
import { BookInterface } from "../types";

export const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const [books, setBooks] = useState<BookInterface[]>([]);

  const getBooks = async () => {
    const response = await getBookByCategory(category!);
    setBooks(response.data.data);
  }

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <section className="categoryPage w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="booksContainer overflow-auto">
            <div className="title text-center py-4">
              <h1 className="text-3xl font-bold">{category}</h1>
            </div>
            <div className="flex justify-evenly items-center w-screen flex-wrap  overflow-auto h-[78vh] ">
              {books.map((singleObject, index) => (
                <Fragment key={index}>
                  <BookCard {...singleObject} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

