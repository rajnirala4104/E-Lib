import { createContext } from "react";
import { UserProfileInfoPopupContextInterface } from "../types";


export const UserProfileInfoPopupContext = createContext<UserProfileInfoPopupContextInterface>({userInfoProfilePopupON:false, setUserInfoProfilePopupOn: () => false})
