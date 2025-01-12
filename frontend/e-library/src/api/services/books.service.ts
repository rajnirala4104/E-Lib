import { BOOK_ENDPOINTS } from "../constants";
import { http } from "../http";

export const getBookByCategory = (category: string) => {
      return http.get(`${BOOK_ENDPOINTS.getBookByCategory}/${category}`);
}

export const getSingleBookInformation = (id: string) => {
      return http.get(`${BOOK_ENDPOINTS.getSingleBook}/${id}`);
}

export const getSearchBookApiCall = (searchQuery?: string) => {
      return http.get(`${BOOK_ENDPOINTS.getSearchBook}?search=${searchQuery}`);
}