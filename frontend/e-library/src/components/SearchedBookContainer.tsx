import React from 'react';
import { SearchInputValue } from '../types';

const SearchedBookContainer: React.FC<SearchInputValue> = (props) => {
    return (
        <div
            onClick={() => {
                alert("wow its working..");
                props.setToggleSearchBarBorder!(true);
            }}
            className="w-[50%] h-[30rem] rounded-lg my-3 flex justify-center items-center bg-blue-50  absolute top-0 shadow-2xl backdrop:bg-transparent">
            <div>
                {props.inputValue}
            </div>
        </div>
    )
}

export default SearchedBookContainer