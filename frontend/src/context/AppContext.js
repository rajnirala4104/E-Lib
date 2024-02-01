import { createContext, useContext, useState } from "react"

const appContext = createContext()

const AppContextProvider = ({ children }) => {

  const [_user, set_user] = useState("raj nirala");
  const [cart, setCart] = useState([])

  return (
    <appContext.Provider value={{ _user, set_user, cart, setCart }}>
      {children}
    </appContext.Provider>
  )
}

export const AppState = () => {
  return useContext(appContext)
}

export default AppContextProvider;