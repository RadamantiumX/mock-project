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
                path: "/search",
                element: <Search/>
            },
            {
                path: "/categories/:category",
                element: <Categories/>
            },
            {
                path: "/models",
                element: <Models/>
            },
            {
                path: "/model-search",
                element: <ModelSearch/>
            },
            {
                path: "/model-index/:name",
                element: <ModelIndex/>
            },
            {
                path: "/videos",
                element: <OrderVideos/>,
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
                element: <Photos/>
            },
            {
                path: "/redirect",
                element: <Redirect/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/legal",
                element: <Legal/>,
                children: [
                    {
                        path: "/legal",
                        element: <Navigate to="/legal/terms"/>
                    },
                    {
                        path: "/legal/terms",
                        element: <Terms/>
                    },
                    {
                        path: "/legal/privacy",
                        element: <Privacy/>
                    }
                ]
            },
            
        ]
    },
    {
        path: "/user",
        element: <UserLayout/>,
        children: [
            {
                path: "/user",
                element: <Navigate to="/user/profile"/>
            },
            {
                path: "/user/profile",
                element: <Profile/>
            },
            {
                path: "/user/fav",
                element: <FavVideos/>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
              {
                 path: "/auth",
                 element: <Navigate to="/auth/portal/signin"/>
              },
              {
                 path: "/auth/portal",
                 element: <Auth/>,
                 children: [
                    {
                       path: "/auth/portal",
                       element: <InnerLayoutAuth/>,
                       children: [
                        {
                            path: "/auth/portal/signin",
                            element: <SignIn/>
                        },
                        {
                            path: "/auth/portal/signup",
                            element: <SignUp/>
                        },
                        {
                            path: "/auth/portal/forgotten-password",
                            element: <ForgotPassword/>
                        },
                        {
                            path: "/auth/portal/password-recovery",
                            element: <PasswordRecovery/>
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