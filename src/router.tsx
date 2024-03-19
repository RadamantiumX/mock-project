import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import ProfileLayout from "./layout/ProfileLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Video from "./pages/Video"
import Search from "./pages/Search";

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