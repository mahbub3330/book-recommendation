import React from 'react';
import Book from "./Book";
import "./BookList.css";

const BookList = ({bookList}) => {
    return (
        <section className='booklist'>
            <div className='container'>
                <div className='booklist-content grid'>
                    {
                        bookList.length > 0 ? bookList.map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        }) : <p className="text-center">No Book Found!</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList