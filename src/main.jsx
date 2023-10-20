import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './Login/Login';
import Register from './Components/Register/Register';
import AddProduct from './Components/AddProduct/AddProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import ProductDetails from './Components/ViewProduct/ProductDetails';
import UpdateProduct from './Components/ViewProduct/UpdateProduct';
import Error from './Error/Error';
import MyCart from './Components/MyCart/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/viewProduct/:name',
        element:<ViewProduct></ViewProduct>,
        loader:()=>fetch('https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/tech')
        
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:()=>fetch('https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/tech')
      },
      {
        path:'/updateProduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:()=>fetch('https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/tech')
      },
      {
        path:'/cart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/cart')
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
