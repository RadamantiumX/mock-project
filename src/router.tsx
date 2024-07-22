import { createBrowserRouter, Navigate, generatePath } from "react-router-dom";

// Layouts //
import GuestLayout from "./layout/GuestLayout";
import UserLayout from "./layout/UserLayout";
import AuthLayout from "./layout/AuthLayout";
//

// Only for Guest Layout
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Video from "./pages/Video"
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Models from "./pages/Models";
import OrderVideos from "./pages/OrderVideos";
import Photos from "./pages/Photos";
import Redirect from "./pages/Redirect";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import ModelIndex from "./pages/ModelIndex";
import ModelSearch from "./pages/ModelSearch";
import CategoriesList from "./pages/CategoriesList";
import Album from "./pages/Album";
//

// Page Components //
import { Terms } from "./components/legalComponents/Terms";
import { Privacy } from "./components/legalComponents/Privacy";
//

// Only for User Layout//
import Profile from "./pages/Profile";
import FavVideos from "./pages/FavVideos";
//

// Only for Videos Layout//
import { Order } from "./components/orderVideosComponents/Order";
//

// Only for Auth Layout //
import Auth from "./pages/Auth";
import { InnerLayoutAuth } from "./components/authComponents/InnerLayoutAuth";
import { ForgotPassword } from "./components/authComponents/ForgotPassword";
import { SignIn } from "./components/authComponents/SignInForm";
import { SignUp } from "./components/authComponents/SignUpForm";
import { PasswordRecovery } from "./components/authComponents/PasswordRecovery";

// 

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"/>,
                errorElement: <NotFound/>
            },
            {
                path: "/home",
                element: <Home/>,
                errorElement: <NotFound/>
            },
            {
                path: "/video/:id/:keywords/:title/:views",
                element: <Video/>,
                errorElement: <NotFound/>
            },
            {
                path: "/search",
                element: <Search/>,
                errorElement: <NotFound/>
            },
            {
                path: "/categories/:category",
                element: <Categories/>,
                errorElement: <NotFound/>
            },
            {
                path: "/categories-list",
                element: <CategoriesList/>,
                errorElement: <NotFound/>
            },
            {
                path: "/models",
                element: <Models/>,
                errorElement: <NotFound/>
            },
            {
                path: "/model-search",
                element: <ModelSearch/>,
                errorElement: <NotFound/>
            },
            {
                path: "/model-index/:name",
                element: <ModelIndex/>,
                errorElement: <NotFound/>
            },
            {
                path: "/videos",
                element: <OrderVideos/>,
                errorElement: <NotFound/>,
                children: [  
                             {
                                path: '/videos',
                                element: <Navigate to={generatePath("/videos/:param", {param: "top-rated"})}/> // Default path in this page
                             },                   
                             {
                                path: '/videos/:param',
                                element: <Order/>
                             },
                        ]                               
            },
            {
                path: "/photos",
                element: <Photos/>,
                errorElement: <NotFound/>,
                children: [
                    {
                        path: '/photos',
                        element: <Navigate to={generatePath("/photos?tag=all&page=1")}/>,
                        errorElement: <NotFound/>
                    }
                ]
            },
            {
                path: "/album/:tag/:album",
                element: <Album/>,
                errorElement: <NotFound/>
            },
            {
                path: "/redirect",
                element: <Redirect/>,
                errorElement: <NotFound/>
            },
            {
                path: "/contact",
                element: <Contact/>,
                errorElement: <NotFound/>
            },
            {
                path: "/legal",
                element: <Legal/>,
                errorElement: <NotFound/>,
                children: [
                    {
                        path: "/legal",
                        element: <Navigate to="/legal/terms"/>,
                        errorElement: <NotFound/>
                    },
                    {
                        path: "/legal/terms",
                        element: <Terms/>,
                        errorElement: <NotFound/>
                    },
                    {
                        path: "/legal/privacy",
                        element: <Privacy/>,
                        errorElement: <NotFound/>
                    }
                ]
            },
            
        ]
    },
    {
        path: "/user",
        element: <UserLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/user",
                element: <Navigate to="/user/profile"/>,
                errorElement: <NotFound/>
            },
            {
                path: "/user/profile",
                element: <Profile/>,
                errorElement: <NotFound/>
            },
            {
                path: "/user/fav",
                element: <FavVideos/>,
                errorElement: <NotFound/>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        errorElement: <NotFound/>,
        children: [
              {
                 path: "/auth",
                 element: <Navigate to="/auth/portal/signin"/>,
                 errorElement: <NotFound/>
              },
              {
                 path: "/auth/portal",
                 element: <Auth/>,
                 errorElement: <NotFound/>,
                 children: [
                    {
                       path: "/auth/portal",
                       element: <InnerLayoutAuth/>,
                       errorElement: <NotFound/>,
                       children: [
                        {
                            path: "/auth/portal/signin",
                            element: <SignIn/>,
                            errorElement: <NotFound/>
                        },
                        {
                            path: "/auth/portal/signup",
                            element: <SignUp/>,
                            errorElement: <NotFound/>
                        },
                        {
                            path: "/auth/portal/forgotten-password",
                            element: <ForgotPassword/>,
                            errorElement: <NotFound/>
                        },
                        {
                            path: "/auth/portal/password-recovery",
                            element: <PasswordRecovery/>,
                            errorElement: <NotFound/>
                        }
                       ]

                    },
                    
                    
                 ]
              }
              
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;