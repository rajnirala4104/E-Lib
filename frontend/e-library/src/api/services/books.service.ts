import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getBookByCategory = (category: string) => {
      return http.get(`${ENDPOINTS.getBookByCategory}/${category}`);
}

export const getSingleBookInformation = (id: string) => {
      return http.get(`${ENDPOINTS.getSingleBook}/${id}`);
}

export const getSearchBookApiCall = (searchQuery?: string) => {
      return http.get(`${ENDPOINTS.getSearchBook}?search=${searchQuery}`);
}