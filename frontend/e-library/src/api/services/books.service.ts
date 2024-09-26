import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getBookByCategory = (category: string) => {
      return http.get(`${ENDPOINTS.getBookByCategory}/${category}`);
}