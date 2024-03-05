import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
     {
        path: '/',
        element: <Home/>
     },
     {
        path: '/profile',
        element: <Profile/>
     },
     {
        path: '*',
        element: <NotFound/>
     }
])

export default router;