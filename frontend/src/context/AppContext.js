import { createContext, useContext, useState } from "react"

const appContext = createContext()

const AppContextProvider = ({ children }) => {

  const [_user, set_user] = useState("raj nirala");
  const [cart, setCart] = useState([])
  const [loginDesign, setLoginDesign] = useState(false)

  return (
    <appContext.Provider value={{ _user, set_user, cart, setCart, loginDesign, setLoginDesign }}>
      {children}
    </appContext.Provider>
  )
}

export const AppState = () => {
  return useContext(appContext)
}

export default AppContextProvider;