import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookByCategory, getSingleBookInformation } from '../api/services/books.service';
import { BooksContainer } from '../components';
import { LeftArrowIcon, StarIcon } from '../icons';
import { BookInterface } from '../types';
import { capitalizeFirstLetter } from '../utils';

enum infoTabEnum {
    description = "description",
    details = "details",
    review = "review"
}

const BookPage: React.FC = () => {

    const [allTheInformation, setAllTheInformation] = useState<BookInterface>();
    const [allBooksWithSameCat, setAllBooksWithSameCat] = useState<BookInterface[]>();
    const [quantity, setQuantity] = useState<string>(0);
    const [infoTab, setInfoTab] = useState<infoTabEnum>(infoTabEnum.description)
    const { id } = useParams();
    const navigator = useNavigate();


    const getBookData = async () => {
        const response = await getSingleBookInformation(id as string);
        setAllTheInformation(response.data.data.book);
    }

    const getBooksWithSameCategory = async (categoryName: string, setterFunctionOfState: React.Dispatch<React.SetStateAction<BookInterface[] | undefined>>) => {
        const response = await getBookByCategory(categoryName);
        setterFunctionOfState(response.data.data);
        return response.data.data;
    };

    useEffect(() => {
        getBookData()
        getBooksWithSameCategory("fiction", setAllBooksWithSameCat)
    }, [])

    return (
        <Fragment>
            <div className="min-h-screen bg-gray-50 py-8">
                {[allTheInformation]?.map((singleObject, index) => (
                    <div key={index} className="container mx-auto px-4">
                        {/* Back Button */}
                        <button onClick={() => navigator("/")} className="flex items-center text-gray-600 hover:text-gray-800 mb-8">
                            <LeftArrowIcon classes="w-5 h-5 mr-2" />
                            Back to Books
                        </button>

                        {/* Main Content */}
                        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Column - Image */}
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                                        <img
                                            src={singleObject?.image}
                                            alt="Book cover"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Right Column - Details */}
                                <div className="space-y-6">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                            {singleObject?.title}
                                        </h1>
                                        <p className="text-lg text-gray-600">{singleObject?.author}</p>
                                        {/* categories */}
                                        <div className='my-2'>
                                            {allTheInformation?.category?.map((singleCat, key) => (
                                                <Fragment key={key}>
                                                    <span
                                                        onClick={() => navigator(`/category/${singleCat}`)}
                                                        className='cursor-pointer hover:bg-blue-200 transition duration-200 p-2 m-1 text-xs text-gray-500 bg-blue-100 rounded-lg'
                                                    >
                                                        {singleCat}
                                                    </span>
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>

                                    {/* TODO: ----------------- Add a rating system ----------------------*/}
                                    {/* Rating */}
                                    <div className="flex items-center space-x-2">
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <StarIcon key={star} classes="w-5 h-5 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-gray-600">(128 reviews)</span>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-2">
                                        <p className="text-3xl font-bold text-gray-900">${singleObject?.price}</p>
                                        <p className="text-green-600 flex items-center">
                                            <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                            In Stock
                                        </p>
                                    </div>

                                    {/* Quantity and Add to Cart */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <label className="text-gray-700">Quantity:</label>
                                            <div className="flex items-center border rounded-lg">
                                                <button
                                                    className="px-3 py-1 border-r hover:bg-gray-100"
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                >
                                                    -
                                                </button>
                                                <span className="px-4 py-1">{quantity}</span>
                                                <button
                                                    className="px-3 py-1 border-l hover:bg-gray-100"
                                                    onClick={() => setQuantity(quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                                                Add to Cart
                                            </button>
                                            <button className="p-3 border rounded-lg hover:bg-gray-50">
                                                {/* <Heart className="w-6 h-6 text-gray-600" /> */}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Shipping Info */}
                                    <div className="border-t pt-6">
                                        <div className="flex items-center text-gray-600 space-x-2">
                                            {/* <Truck className="w-5 h-5" /> */}
                                            <span>Free shipping on orders over $50</span>
                                        </div>

                                    </div>
                                    {/* Image Grid */}
                                    <div className="grid grid-cols-4 gap-2 mt-8">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                                                <img
                                                    src={singleObject?.image}
                                                    alt={`Preview ${i}`}
                                                    className="object-cover cursor-pointer hover:opacity-75"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* Book Details Tabs */}
                            <div className="mt-12">
                                <div className="border-b border-gray-200">
                                    <nav className="flex space-x-8">
                                        {['description', 'details', 'reviews'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setInfoTab(tab as infoTabEnum)}
                                                className={`py-4 px-1 border-b-2 ${tab === infoTab
                                                    ? 'border-blue-600 text-blue-600'
                                                    : 'border-transparent text-gray-600 hover:text-gray-800'
                                                    }`}
                                            >
                                                {capitalizeFirstLetter(tab)}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Description Content */}
                                <div className="py-6">
                                    <h2 className="text-xl font-semibold mb-4">About this book</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {singleObject?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div>
                    <BooksContainer booksArray={allBooksWithSameCat!} categoryName='fiction' title='More Books' />
                </div>
            </div>
        </Fragment >
    )
}

export default BookPage