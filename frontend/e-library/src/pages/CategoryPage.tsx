import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { category } = useParams();

  return (
    <Fragment>
      <section>
        <div>
          <div className="title">
            <h1>{category}</h1>
          </div>
          <div className="booksContainer">books</div>
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryPage;
