import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './page/Home';
import Projects from './page/Projects';
import ContactMe from './page/ContactMe';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contactme",
    element: <ContactMe />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);