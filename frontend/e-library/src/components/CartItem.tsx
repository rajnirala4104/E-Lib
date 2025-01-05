import React from "react";
import { CartItemProps } from "../types";

export const CartItem: React.FC<CartItemProps> = (props) => {

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <img
        src={props.book.image}
        alt={props.book.title}
        className="w-24 h-32 object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{props.book.title}</h3>
        <p className="text-gray-600">{props.book.author}</p>
        <p className="text-green-600 font-medium">${props.book.price!.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => props.onUpdateQuantity(props.book._id!, Math.max(0, props.book.quantity - 1))}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
        >
          -
        </button>
        <input
          type="number"
          min="0"
          value={props.book.quantity}
          onChange={(e) => props.onUpdateQuantity(props.book._id!, parseInt(e.target.value) || 0)}
          className="w-16 text-center border border-gray-300 rounded"
        />
        <button
          onClick={() => props.onUpdateQuantity(props.book._id!, props.book.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
        >
          +
        </button>
        <button
          onClick={() => props.onRemove(props.book._id!)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};