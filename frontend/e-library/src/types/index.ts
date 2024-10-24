export interface IconClasses {
      classes?: string
}

export interface BookInterface {
      _id?: string,
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

export interface ShuffleArrayMethodsInterface {
      stringArray?: string[],
      booksArray?: BookInterface[],
}

export interface SearchInputValue {
      inputValue?: string
}
