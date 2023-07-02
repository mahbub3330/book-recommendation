import axios from "axios";

export const getUserWiseRecommendedBooks = (userId) => {
    return axios.get(`/books/${userId}`);
}