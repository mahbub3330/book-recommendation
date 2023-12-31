import React, {useState} from 'react';
import "./Header.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import Book from "../../components/BookList/BookList";
import {searchBooks} from "../../api/GoogleBooksApi";
import Loading from "../../components/Loader/Loader"

const Home = () => {
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (data) => {
        if (data === null) return;
        const search = data.trim();
        setLoading(true);
        await searchBooks(search).then(res => {
            if (res.data.totalItems > 0 && res.data.items.length > 0) {
                // eslint-disable-next-line array-callback-return
                const books = res.data.items.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail !== undefined) {
                        return {
                            "book_id": item.id,
                            "selfLink": item.selfLink,
                            "title": item.volumeInfo.title,
                            "thumbnail": thumbnail,
                            "authors": item.volumeInfo.authors.join(", "),
                            "publishedDate": item.volumeInfo.publishedDate
                        }
                    }
                }).filter(item => item !== undefined)
                setBooksData(books)
                setLoading(false);
            }
        })
            .catch(err => {
                setLoading(false);
                setBooksData([])
            })
    }


    return (
        <>
            <div className='holder'>
                <header className='header'>
                    <div className='header-content flex flex-c text-center text-white'>
                        <h2 className='header-title text-capitalize'>find your book of choice.</h2><br/>
                        <SearchForm onSubmit={handleSubmit}/>
                    </div>
                </header>
            </div>
            {
                loading ? <Loading/>
                    : <Book bookList={booksData}/>
            }

        </>
    )
}

export default Home