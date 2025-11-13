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

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      children:[
        {
          index: true,
          Component: Home,
          loader: () => fetch('http://localhost:1000/crops')
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
          loader: () => fetch('http://localhost:1000/crops')
        },
        {
          path: '/addcrops',
          element: <AddCrops></AddCrops>
        },
        {
          path: '/cropdetails/:id',
          element: <CropDetails></CropDetails>,
          loader: ({params}) => fetch(`http://localhost:1000/crops/${params.id}`) 
        },
        {
          path: '/mypost',
          element: <MyPosts></MyPosts>
        }
      ]
    }
  ])