import React, { Fragment, useEffect, useState } from 'react';
import { BookCard } from '.';
import { getSearchBookApiCall } from '../api/services/books.service';
import { BookInterface, SearchInputValue } from '../types';

const SearchedBookContainer: React.FC<SearchInputValue> = (props) => {

    const [searchedBooks, setSearchedBooks] = useState<BookInterface[]>([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchApiCallHandler = async () => {
        const response = await getSearchBookApiCall(props.inputValue);
        setSearchedBooks(response.data.data.books);
    }

    useEffect(() => {
        searchApiCallHandler();
    }, [props.inputValue, searchApiCallHandler])

    return (
        <div
            className="w-[70%] h-[34rem] rounded-lg my-3 flex justify-center items-center bg-blue-50  absolute top-0 shadow-2xl backdrop:bg-transparent">
            <div className='w-full h-full flex flex-wrap justify-center items-center overflow-auto border border-black'>
                {searchedBooks.length > 0 ? searchedBooks?.map((singleBookObject, index) => (
                    <Fragment key={index}>
                        <div
                            className='flex w-[30%] h-[70%] m-2'
                            onClick={() => window.location.href = `/book/${singleBookObject._id}`}
                        >
                            <BookCard {...singleBookObject} />
                        </div>
                    </Fragment>
                )) : ""}
                {searchedBooks.length === 0 ? (
                    <Fragment>
                        <div className="w-[50%] h-[50%] bg-blue-100 rounded-lg flex justify-center items-center">
                            <p>No Books Found</p>
                        </div>
                    </Fragment>
                ) : ""}
            </div>
        </div>
    )
}

export default SearchedBookContainer