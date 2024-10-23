import React from 'react'
import { SearchInputValue } from '../types'

const SearchedBookContainer: React.FC<SearchInputValue> = (props) => {
    return (
        <div className="w-[50%] h-[30rem] rounded-lg my-3 flex justify-center items-center bg-white absolute top-0">
            <div>
                {props.inputValue}
            </div>
        </div>
    )
}

export default SearchedBookContainer