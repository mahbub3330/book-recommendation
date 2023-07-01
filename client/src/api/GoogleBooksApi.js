import * as constant from "../constant";
import axios from "axios";

const googleBooksAPI = constant.GOOGLE_BOOKS_API;
const apiKey = constant.GOOGLE_BOOKS_API_KEY;
const maxResult = 40;
export const searchBooks = (searchText) => {
    return axios.get(googleBooksAPI + '?q=' + searchText + '&key=' + apiKey + '&maxResults=' + maxResult)
}

export const getBookDetails = (selfLink) => {
    return axios.get(selfLink);
}