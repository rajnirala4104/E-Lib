import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getAllBooks = () => {
  return http.get(ENDPOINTS.books);
};
