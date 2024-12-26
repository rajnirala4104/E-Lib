import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart: React.FC = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">Add some books to get started!</p>
      <Link to={'/'} className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
        Browse Books
      </Link>
    </div>
  );
};
