import React, {useState} from 'react';
import "./Header.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import axios from "axios";
import Book from "../../components/BookList/BookList";

const Home = () => {
    const [booksData, setBooksData] = useState([]);
    const handleSubmit = async (data) => {
        if (data === null) return
        console.log(data)
        const search = data.trim();
        // AIzaSyC4qAS30RwAPFZeNCn_lixM0Ua1lQF4H1k
        await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyC4qAS30RwAPFZeNCn_lixM0Ua1lQF4H1k' + '&maxResults=40')
            .then(res => {
                if (res.data.totalItems > 0 && res.data.items.length > 0) {
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
                    console.log('books', booksData)
                }
            })
            .catch(err => setBooksData([]))
    }
    return (
        <>
            <div className='holder'>
                <header className='header'>
                    <div className='header-content flex flex-c text-center text-white'>
                        <h2 className='header-title text-capitalize'>find your book of choice.</h2><br/>
                        <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quam
                            beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id
                            repudiandae, modi iste? Eligendi, rerum!</p>
                        <SearchForm onSubmit={handleSubmit}/>
                    </div>
                </header>
            </div>
            <Book bookList={booksData}/>
        </>
    )
}

export default Home