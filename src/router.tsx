import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import ProfileLayout from "./layout/ProfileLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Video from "./pages/Video"
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Models from "./pages/Models";
import Video4k from "./pages/Video4k";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/video/:id/:keywords/:title/:views",
                element: <Video/>
            },
            {
                path: "/search/:query",
                element: <Search/>
            },
            {
                path: "/categories",
                element: <Categories/>
            },
            {
                path: "/models",
                element: <Models/>
            },
            {
                path: "/videos4k",
                element: <Video4k/>
            }
        ]
    },
    {
        path: "/profile",
        element: <ProfileLayout/>,
        children: [
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;