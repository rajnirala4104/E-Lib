import { createContext } from "react";
import { AdminSideBarViewStateInterface, UserProfileInfoPopupContextInterface } from "../types";


export const UserProfileInfoPopupContext = createContext<UserProfileInfoPopupContextInterface>({userInfoProfilePopupON:false, setUserInfoProfilePopupOn: () => false})

export const AdminSideBarViewStateContext = createContext<AdminSideBarViewStateInterface>({
  view: "dashboard",
  setView: () => "dashboard"
})
