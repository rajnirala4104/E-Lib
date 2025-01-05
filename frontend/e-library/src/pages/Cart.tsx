import React, { useState } from 'react';
import { CartItem } from '../components/CartItem';
import { EmptyCart } from '../components/EmptyCart';
import { CartItemInterface } from '../types';
import { CartSummary } from './CartSummary';

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([
    {
      _id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 9,
      image: '/api/placeholder/150/200',
      quantity: 1,
    },
    {
      _id: '2',
      title: '1984',
      author: 'George Orwell',
      price: 12,
      image: '/api/placeholder/150/200',
      quantity: 2,
    },
  ]);

  const handleUpdateQuantity = (_id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item._id === _id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemove = (_id: string) => {
    setCartItems(items => items.filter(item => item._id !== _id));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item._id}
                book={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
        <div className='lg:col-span-1'>
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
};