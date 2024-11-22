export const BASE_URL = "http://127.0.0.1:8001/api/v1";
export const TIMEOUT = 6000;
export const ENDPOINTS = {
      getAllBooks: "/books",
      getSingleBook: "/books", // :id
      getBookByCategory: "/books/category", // :catName
      getSearchBook: "/books/search", // :searchTerm

}