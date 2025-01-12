export const BASE_URL = "http://127.0.0.1:8001/api/v1";

export const BOOK_ENDPOINTS = {
      getAllBooks: "/books",
      getSingleBook: "/books", // :id
      getBookByCategory: "/books/category", // :catName
      getSearchBook: "/books/search", // :searchTerm
}

export const ADMIN_ENDPOINTS = {
      login: "/admin/login",
      registration: "/admin/registration",
      logout: "/admin/logout",
}
