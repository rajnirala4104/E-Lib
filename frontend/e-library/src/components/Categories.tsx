import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories.json";
import { shuffleArray } from "../utils";

const Categories: React.FC = () => {
  const [randomCategories, setRandomCategories] = useState<string[]>();
  // const [selectedCategory, setSelectedCategory] = useState<string>();

  const navigator = useNavigate();

  const handleClick = (categoryName: string) => {
    // setSelectedCategory(categoryName);
    navigator(`/category/${categoryName}`);
    window.location.reload();
  }

  useEffect(() => {
    setRandomCategories(shuffleArray(categories));
  }, []);

  return (
    <Fragment>
      {randomCategories?.map((cat, index) => (
        <Fragment key={index}>
          <div
            onClick={() => handleClick(cat)}
            className="text-center gird place-content-center p-2 px-4 place-items-center cursor-pointer hover:bg-[rgba(52,174,199,0.27)] transition duration-300 ease-in-out border-l">
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
