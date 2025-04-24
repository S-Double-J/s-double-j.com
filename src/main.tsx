import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App/App.tsx";
import "./index.css";
import ErrorPage from "./routes/App/ErrorPage.tsx";
import Home from "./routes/Home/Home.tsx";
import Services from "./routes/Services/Services.tsx";
import Contact from "./routes/Contact/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App key="App" />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Services /> },
      {path: "contact", element: <Contact /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
