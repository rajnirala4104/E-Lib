import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBookInformation } from '../api/services/books.service';
import { BookInterface } from '../types';

const BookPage: React.FC = () => {

    const [allTheInformation, setAllTheInformation] = useState<BookInterface>()
    const { id } = useParams();

    const getBookData = async () => {
        const response = await getSingleBookInformation(id!);
        setAllTheInformation(response.data.data.book);
    }

    useEffect(() => {
        getBookData()
    }, [])

    return (
        <Fragment>
            <section className='flex justify-center items-center flex-col w-full h-[80vh]'>
                <div className="mainContainer flex justify-center items-center flex-col w-full h-full">
                    <span className='text-4xl'>{allTheInformation?.title}</span>
                    <span>we'll design this page later</span>
                </div>
            </section>
        </Fragment>
    )
}

export default BookPage