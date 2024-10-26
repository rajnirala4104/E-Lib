import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookByCategory } from "../api/services/books.service";
import { BookInterface } from "../types";

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const [books, setBooks] = useState<BookInterface[]>([]);

  const getBooks = async () => {
    const response = await getBookByCategory(category!);
    setBooks(response.data.data);
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <Fragment>
      <section className="categoryPage w-full h-[70vh] flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="title">
            <h1 className="text-3xl font-bold">{category}</h1>
          </div>
          <div className="booksContainer">books</div>
          {/* i'll remove it */}
          <span className="my-5">We'll design this page later</span>
          {books.map((singleObject, index) => (
            <Fragment key={index}>
              <img src={singleObject.image} alt="" />
              <h1 className="text-red-500">{singleObject.title}</h1>
            </Fragment>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryPage;
