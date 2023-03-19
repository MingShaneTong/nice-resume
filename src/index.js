import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './page/Home';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);