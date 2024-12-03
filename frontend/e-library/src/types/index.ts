export interface IconClasses {
      classes?: string
}

export interface BookInterface {
      _id?: string,
      title?: string,
      image?: string,
      price?: number
      author?: string,
      category?: string[],
      // ISBN?: string,
      // publicationDate?: string,
      // publisher?: string,
      description?: string,
}

export interface BookCardInterface extends BookInterface {
      genre?: boolean,
}

export interface BooksContainerInterface {
      categoryName: string,
      title: string,
      booksArray: BookInterface[];
}

export interface ShuffleArrayMethodsInterface {
      stringArray?: string[],
      booksArray?: BookInterface[],
}

export interface SearchInputValue {
      inputValue?: string,
      toggleSearchBarBorder?: boolean,
      setToggleSearchBarBorder?: React.Dispatch<React.SetStateAction<boolean>>,
}
