/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate, generatePath } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "./components/commonComponents/Spinner";

// Page Components //
import { Terms } from "./components/legalComponents/Terms";
import { Privacy } from "./components/legalComponents/Privacy";

// Only for Videos Layout//
import { Order } from "./components/orderVideosComponents/Order";

// Only for Auth Layout //
// import Auth from "./pages/Auth";
import { InnerLayoutAuth } from "./components/authComponents/InnerLayoutAuth";
import { ForgotPassword } from "./components/authComponents/ForgotPassword";
import { SignIn } from "./components/authComponents/SignInForm";
import { SignUp } from "./components/authComponents/SignUpForm";
import { PasswordRecovery } from "./components/authComponents/PasswordRecovery";

// Lazy (Only defaults imports)
const GuestLayout = lazy(()=> import('./layout/GuestLayout'))
const UserLayout = lazy(()=> import('./layout/UserLayout'))
const AuthLayout = lazy(()=> import('./layout/AuthLayout'))
const Home = lazy(()=> import('./pages/Home'))
const NotFound = lazy(()=> import('./pages/NotFound'))
const Video = lazy(()=> import('./pages/Video'))
const Search = lazy(()=> import('./pages/Search'))
const Categories = lazy(()=> import('./pages/Categories'))
const Models = lazy(()=> import('./pages/Models'))
const OrderVideos = lazy(()=> import('./pages/OrderVideos'))
const Photos = lazy(()=> import('./pages/Photos'))
const Redirect = lazy(()=> import('./pages/Redirect'))
const Contact = lazy(()=> import('./pages/Contact'))
const Legal = lazy(()=>import('./pages/Legal'))
const ModelIndex = lazy(()=> import('./pages/ModelIndex'))
const ModelSearch = lazy(()=> import('./pages/ModelSearch'))
const CategoriesList = lazy(()=> import('./pages/CategoriesList'))
const Album = lazy(()=> import('./pages/Album'))
const Profile = lazy(()=> import('./pages/Profile'))
const FavVideos = lazy(()=> import('./pages/FavVideos'))
const Auth = lazy(()=> import('./pages/Auth'))


const router = createBrowserRouter([
    {
        path: "/",
        element:<Suspense fallback={<Spinner/>}><GuestLayout/></Suspense> ,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"/>,
                errorElement: <NotFound/>
            },
            {
                path: "/home",
                element: <Suspense fallback={<Spinner/>}><Home/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/video/:id/:keywords/:title/:views",
                element: <Suspense fallback={<Spinner/>}><Video/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/search",
                element: <Suspense fallback={<Spinner/>}><Search/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/categories/:category",
                element: <Suspense fallback={<Spinner/>}><Categories/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/categories-list",
                element: <Suspense fallback={<Spinner/>}><CategoriesList/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/models",
                element: <Suspense fallback={<Spinner/>}><Models/></Suspense> ,
                errorElement: <NotFound/>
            },
            {
                path: "/model-search",
                element: <Suspense fallback={<Spinner/>}><ModelSearch/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/model-index/:name",
                element: <Suspense fallback={<Spinner/>}><ModelIndex/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/videos",
                element: <Suspense fallback={<Spinner/>}><OrderVideos/></Suspense>,
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
                element: <Suspense fallback={<Spinner/>}><Photos/></Suspense>,
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
                element: <Suspense fallback={<Spinner/>}><Album/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/redirect",
                element: <Suspense fallback={<Spinner/>}><Redirect/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Spinner/>}><Contact/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/legal",
                element: <Suspense fallback={<Spinner/>}><Legal/></Suspense>,
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
        element: <Suspense fallback={<Spinner/>}><UserLayout/></Suspense>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/user",
                element: <Navigate to="/user/profile"/>,
                errorElement: <NotFound/>
            },
            {
                path: "/user/profile",
                element: <Suspense fallback={<Spinner/>}><Profile/></Suspense>,
                errorElement: <NotFound/>
            },
            {
                path: "/user/fav",
                element: <Suspense fallback={<Spinner/>}><FavVideos/></Suspense>,
                errorElement: <NotFound/>
            }
        ]
    },
    {
        path: "/auth",
        element: <Suspense fallback={<Spinner/>}><AuthLayout/></Suspense>,
       
        children: [
              {
                 path: "/auth",
                 element: <Navigate to="/auth/portal/signin"/>,
                 
              },
              {
                 path: "/auth/portal",
                 element: <Suspense fallback={<Spinner/>}><Auth/></Suspense>,
                 
                 children: [
                    {
                       path: "/auth/portal",
                       element: <InnerLayoutAuth/>,
                       
                       children: [
                        {
                            path: "/auth/portal/signin",
                            element: <SignIn/>,
                            
                        },
                        {
                            path: "/auth/portal/signup",
                            element: <SignUp/>,
                           
                        },
                        {
                            path: "/auth/portal/forgotten-password",
                            element: <ForgotPassword/>,
                            
                        },
                        {
                            path: "/auth/portal/password-recovery",
                            element: <PasswordRecovery/>,
                            
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