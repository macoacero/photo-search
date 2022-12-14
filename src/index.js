import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home'
import Posts from './Posts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "posts",
    element: <Posts></Posts>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);