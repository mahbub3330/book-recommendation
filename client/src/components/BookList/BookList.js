import React from 'react';
import Book from "./Book";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = ({bookList}) => {

    // if(loading) return <Loading />;

    return (
        <section className='booklist'>
            <div className='container'>
                <div className='booklist-content grid'>
                    {
                        bookList.map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList