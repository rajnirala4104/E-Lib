import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getBookByCategory = (category: string) => {
      return http.get(`${ENDPOINTS.getBookByCategory}/${category}`);
}

export const getSingleBookInformation = (id: string) => {
      return http.get(`${ENDPOINTS.getSinglebook}/${id}`);
}