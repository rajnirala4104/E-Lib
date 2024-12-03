import React, { Fragment, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { BookCardInterface } from "../types";

const BookCard: React.FC<BookCardInterface> = (props) => {
  const navigator = useNavigate()

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          onClick={() => navigator(`/book/${props._id}`)}
          className="cursor-pointer max-w-sm w-[18rem] my-2 border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 group">
          {/* Image with Zoom Effect */}
          <div className="relative overflow-hidden">
            <img
              src={props.image}
              alt={`${props.title} cover`}
              className="w-full h-52 object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{props.title}</h2>
            <p className="text-sm text-gray-500 mb-2">by {props.author}</p>
            <p className="text-gray-700 text-sm line-clamp-3 mb-4">{props.description}</p>
          </div>
          <div className={`${props.genre ? "" : "hidden"} flex flex-wrap justify-start items-center mb-3 mx-3 -mt-5`}>
            {props.category?.map((cat, index) => (
              <Fragment key={index}>
                <span
                  // BUG: not redirecting to category page
                  // onClick={() => navigator(`/category/${cat}`)}
                  className="text-xs m-1 text-gray-500 bg-blue-100 px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-200">{cat}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

export default BookCard;
