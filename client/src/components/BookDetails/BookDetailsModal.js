import "./BookDetails.css"
import coverImg from "../../images/cover_not_found.jpg";
import {useEffect, useState} from "react";
import Loading from "../Loader/Loader"
import {getBookDetails} from "../../api/GoogleBooksApi";
import {Button, TextField} from "@mui/material";
import {storeRecommendedBook} from "../../api/RecommendedBookApi";

const BookDetailsModal = ({show, item, onClose}) => {
    const [bookInfo, setBookInfo] = useState(null)
    const [loading, setLoading] = useState(false);
    const [recommend, setRecommend] = useState(false);
    const [email, setEmail] = useState(null)

    async function bookDetails() {
        await getBookDetails(item.selfLink)
            .then(res => {
                if (res.status === 200) {
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

    const submitRecommendation = () => {
        if (email) {
            const params = {
                'email': email,
                'book_id': bookInfo.book_id,
                'self_link': bookInfo.selfLink,
                'title': bookInfo.title,
                'thumbnail': bookInfo.thumbnail,
                'authors': bookInfo.authors,
                'published_date': bookInfo.publishedDate,
            }
            storeRecommendedBook(params).then(res => {
                if (res.status === 201) {
                    alert('Recommended Successfully')
                }
                if (res.status === 200 && res.data.success === false) {
                    const bookIdErr = res.data.data['book_id'] ? res.data.data['book_id'][0] : "";
                    const userIdErr = res.data.data['email'] ? res.data.data['email'][0] : "";
                    alert(bookIdErr + ' ' + userIdErr)
                }
            }).catch(err => {
                console.log(err.response.data)
                alert('something went wrong!')
            })
        }
        setRecommend(!recommend)
        setEmail(null)
    }
    useEffect(() => {
        if (item) {
            setLoading(true);
            bookDetails().then(() => console.log())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!show) {
        return null;
    }

    if (loading) return <Loading/>;

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
                                    <h4>{bookInfo.publisher}<span>  {bookInfo.publishedDate}</span></h4><br/>
                                    <a href={bookInfo.previewLink} target="_blank" rel="noreferrer">
                                        <button>More</button>
                                    </a>
                                </div>

                            </div>

                            {
                                recommend ?
                                    <div className="margin-top">
                                        <TextField
                                            label="Email"
                                            id="outlined-size-small"
                                            placeholder="Enter Email"
                                            size="small"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Button variant="contained"
                                                onClick={submitRecommendation}>Submit</Button>
                                    </div>
                                    : <div className="margin-top">
                                        <Button variant="contained"
                                                onClick={() => setRecommend(!recommend)}>Recommend</Button>
                                    </div>

                            }

                            <h4 className="description">{bookInfo.description}</h4>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
export default BookDetailsModal;