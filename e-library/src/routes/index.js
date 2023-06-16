
import { createBrowserRouter } from "react-router-dom";
import { About, BuyNowPage, Home, Root, NoPage } from "../pages";
export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/buynow',
                element: <BuyNowPage/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/*',
                element: <NoPage />
            }
        ]
    }
])