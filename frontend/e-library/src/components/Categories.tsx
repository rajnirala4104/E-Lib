import React, { Fragment } from "react";
import { categories } from "../data/categories.json";

const Categories: React.FC = () => {
  return (
    <Fragment>
      {categories.map((cat, index) => (
        <Fragment key={index}>
          <div className="text-center gird place-content-center p-2 px-4 place-items-center cursor-pointer hover:bg-[rgba(52,174,199,0.27)] transition duration-300 ease-in-out border-l">
            <span className="text-center flex justify-center items-center mx-auto text-sm">
              {cat}
            </span>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Categories;
