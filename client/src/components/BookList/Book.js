import React, {useState} from 'react';
import "./BookList.css";
import coverImg from "../../images/cover_not_found.jpg";
import BookDetailsModal from "../BookDetails/BookDetailsModal";

const Book = (book) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
            <div className='book-item flex flex-column flex-sb' onClick={() => {
                setShow(true);
                setItem(book)
            }}>
                <div className='book-item-img'>
                    <img src={book.thumbnail ? book.thumbnail : coverImg} alt="cover"/>
                </div>
                <div className='book-item-info text-center'>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.title}</span>
                    </div>

                    <div className='book-item-info-item author fs-15'>
                        <span className='text-capitalize fw-7'>Author: </span>
                        <span>{book.authors}</span>
                    </div>

                    <div className='book-item-info-item publish-year fs-15'>
                        <span className='text-capitalize fw-7'>First Publish Year: </span>
                        <span>{book.publishedDate}</span>
                    </div>
                </div>
            </div>
            {
                show ?
                    <BookDetailsModal show={show} item={bookItem} onClose={() => setShow(false)}/>
                    : null
            }
        </>

    )
}

export default Book