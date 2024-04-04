import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
     
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
