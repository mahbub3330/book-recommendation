import "./BookDetails.css"
import coverImg from "../../images/cover_not_found.jpg";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loader/Loader"

const BookDetailsModal = ({show, item, onClose}) => {
    const [bookInfo, setBookInfo] = useState(null)
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (item) {
            setLoading(true);

            async function getBookDetails() {
                await axios.get(item.selfLink)
                    .then(res => {
                        if (res.status == 200) {
                            const book = res.data
                            let bookInfos = {
                                "title": book.volumeInfo.title,
                                "thumbnail": item.thumbnail ? item.thumbnail : coverImg,
                                "publisher": book.volumeInfo.publisher,
                                "publishedDate": book.volumeInfo.publishedDate,
                                "previewLink": book.volumeInfo.previewLink,
                                "description": book.volumeInfo.description,
                            }
                            bookInfos = {...item, ...bookInfos}
                            setBookInfo(bookInfos)
                            setLoading(false);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false);
                    })
            }

            getBookDetails()

        }
    }, [item])

    if (!show) {
        return null;
    }

    if (loading) return <Loading/>;

    // let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            {
                bookInfo !== null ?
                    <div className="overlay">
                        <div className="overlay-inner">
                            <button className="close" onClick={onClose}>X</button>
                            <div className="inner-box">
                                <img src={bookInfo.thumbnail} alt=""/>
                                <div className="info">
                                    <h1>{bookInfo.title}</h1>
                                    <h3>{bookInfo.authors}</h3>
                                    <h4>{bookInfo.publisher}<span>{bookInfo.publishedDate}</span></h4><br/>
                                    <a href={bookInfo.previewLink} target="_blank">
                                        <button>More</button>
                                    </a>
                                </div>
                            </div>
                            <h4 className="description">{ bookInfo.description }</h4>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
export default BookDetailsModal;