import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App"
import Multimedia from "./Multimedia/Multimedia";
import Loginpage from "./Loginpage/Loginpage";
import Shoppage from "./Shoppage/Shoppage";

import CollectionPage from "./Collection/CollectionPage";
import ProgramPage from "./NasaProgram/ProgramPage";
import CartPage from "./Cart/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "shop",
    element: <Shoppage/>,
  },
  {
    path: "collections",
    element: <CollectionPage/>
  },
  {
    path: "programs",
    element: <ProgramPage/>,
  },
  {
    path: "multimedia",
    element: <Multimedia/>,
  },
  {
    path: "login",
    element: <Loginpage/>
  },
  {
    path: "cart",
    element: <CartPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


























// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />

// );









