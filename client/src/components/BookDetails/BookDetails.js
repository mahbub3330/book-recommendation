import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';


const BookDetails = () => {


    // if(loading) return <Loading />;

    return (
        <section className='book-details'>
            <div className='container'>
                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        {/*<img src={book?.cover_img} alt="cover img"/>*/}
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            {/*<span className='fw-6 fs-24'>{book?.title}</span>*/}
                        </div>
                        <div className='book-details-item description'>
                            {/*<span>{book?.description}</span>*/}
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Places: </span>
                            {/*<span className='text-italic'>{book?.subject_places}</span>*/}
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Times: </span>
                            {/*<span className='text-italic'>{book?.subject_times}</span>*/}
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subjects: </span>
                            {/*<span>{book?.subjects}</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetails