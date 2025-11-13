import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllCrops from "./Pages/AllCrops";
import AddCrops from "./Pages/AddCrops";
import CropDetails from "./Pages/CropDetails";
import { param } from "framer-motion/client";
import MyPosts from "./Components/MyPosts";
import MyProfile from "./Pages/MyProfile";
import UpdateProfile from "./Pages/UpdateProfile";
import Interestpage from "./Pages/Interestpage";
import PrivateRoute from "./Components/PrivateRoute";
import Error from "./Components/Error";
import Loading from "./Components/Loading";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      hydrateFallbackElement: <Loading></Loading>,
      children:[
        {
          index: true,
          Component: Home,
          loader: () => fetch('https://krishilink-server-six.vercel.app/crops')
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/allcrops',
          Component: AllCrops,
          loader: () => fetch('https://krishilink-server-six.vercel.app/crops'),
          errorElement: <Error></Error>,
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: '/addcrops',
          element: <PrivateRoute>
            <AddCrops></AddCrops>
          </PrivateRoute>
        },
        {
          path: '/cropdetails/:id',
          element: <PrivateRoute>
            <CropDetails> </CropDetails> 
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://krishilink-server-six.vercel.app/crops/${params.id}`),
          errorElement: <Error></Error>,
          hydrateFallbackElement: <Loading></Loading> 
        },
        {
          path: '/mypost',
          element: <PrivateRoute>
             <MyPosts></MyPosts>
          </PrivateRoute>
        },
        {
          path: '/myprofile',
          element: <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        },
        {
          path: '/updateprofile',
          element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        },
        {
          path: '/interests',
          element: <PrivateRoute>
            <Interestpage></Interestpage>
          </PrivateRoute>
        }
        ,
        {
          path: '*',
          element: <Error></Error>

        }
      ]
    }
  ])