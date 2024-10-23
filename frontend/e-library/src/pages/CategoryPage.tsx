import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { category } = useParams();

  console.log(category);

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
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryPage;
