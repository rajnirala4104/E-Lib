export interface IconClasses {
      classes?: string
}

export interface BookInterface {
      title?: string,
      image?: string,
      price?: number
      author?: string,
      cateogry?: string[],
      description?: string,
}

export interface BooksContainerInterface {
      categoryName: string,
      booksArray: BookInterface[];
}