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
    phoneNumber: string;
      password: string;
      confirmPassword: string;
}

export interface FormErrors {
      firstName?: string;
      lastName?: string;
      email?: string;
    phoneNumber?: string;
      password?: string;
      confirmPassword?: string;
}

export interface UserProfileInfoPopupContextInterface {
  userInfoProfilePopupON: boolean,
  setUserInfoProfilePopupOn: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AdminSideBarViewStateInterface {
  view: menuValueEnum | string,
  setView: React.Dispatch<React.SetStateAction<menuValueEnum | string>>
}

export interface AdminInfoInterface {
  name: string,
  email:string,
  roll:string,
  location: string,
}

export interface AdminRegistrationFormData {
  name: string;
  email: string;
  password: string;
  location: string,
  role: string;
}

export enum menuValueEnum {
  dashboard="dashboard",
  inventory="inventory",
  orders="orders",
  customers="customers",
  finance="finance",
}

export interface TotalsBoxInterface {
  icon?: JSX.Element,
  title?: string,
  totalNumber?: string
  navigato?: string
}

