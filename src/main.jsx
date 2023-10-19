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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        loader:()=>fetch('http://localhost:5000/tech')
        
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/tech')
      },
      {
        path:'/updateProduct/:_id',
        element:<UpdateProduct></UpdateProduct>,
        loader:()=>fetch('http://localhost:5000/tech')
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
