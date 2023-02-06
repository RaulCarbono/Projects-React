import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Pokemon } from "./pages";
import './index.scss'


const router = createBrowserRouter([
  {
    path: '/',
    element :<Home />
  },
  {
    path: '/:pokeId',
    element:<Pokemon />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
