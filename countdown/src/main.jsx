import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CounterProvider } from "./context/counterdownContext.jsx";

import Home from "./routes/Home.jsx";
import Counterdown from "./routes/Counterdown.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/counterdown",
        element: <Counterdown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <RouterProvider router={router}></RouterProvider>
    </CounterProvider>
  </React.StrictMode>
);
