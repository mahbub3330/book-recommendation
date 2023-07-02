import axios from "axios";

export const getUserWiseRecommendedBooks = (userId) => {
    return axios.get(`/books/${userId}`);
}

export const storeRecommendedBook = (params) => {
    return axios.post(`/books`, params);
}