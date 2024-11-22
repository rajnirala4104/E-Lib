import React, { Fragment, useEffect, useState } from 'react';
// import { BookCard } from '.';
import { getSearchBookApiCall } from '../api/services/books.service';
import { BookInterface, SearchInputValue } from '../types';

const SearchedBookContainer: React.FC<SearchInputValue> = (props) => {

    const [searchedBooks, setSearchedBooks] = useState<BookInterface[]>([]);

    const searchApiCallHandler = async () => {
        const response = await getSearchBookApiCall(props.inputValue);
        setSearchedBooks(response.data.data.books);
    }

    useEffect(() => {
        searchApiCallHandler();
    }, [props.inputValue])


    return (
        <div
            className="w-[50%] h-[30rem] rounded-lg my-3 flex justify-center items-center bg-blue-50  absolute top-0 shadow-2xl backdrop:bg-transparent">
            <div className='w-full h-full flex flex-col justify-center items-center overflow-auto'>
                {props.inputValue}
                {searchedBooks.length > 0 ? searchedBooks?.map((singleBookObject, index) => (
                    <Fragment key={index}>
                        <p>{singleBookObject.title}</p>
                    </Fragment>
                )) : ""}
            </div>
        </div>
    )
}

export default SearchedBookContainer