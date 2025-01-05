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

export interface CartItemInterface extends BookInterface {
      quantity: number;
}

export interface CartSummaryProps {
      items?: CartItemInterface[];
}

export interface CartItemProps {
      book: CartItemInterface;
      onUpdateQuantity: (id: string, quantity: number) => void;
      onRemove: (id: string) => void;
}


export interface FormData {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
}

export interface FormErrors {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
}