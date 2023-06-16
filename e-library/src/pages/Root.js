import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../shared/components/NavBar"

export const Root = () => {
    const path = useLocation()
    console.log(path.pathname)
    return (
        <>
            <NavBar pathname={path.pathname}/>
            <Outlet />
        </>
    )
}