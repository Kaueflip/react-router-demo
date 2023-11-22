import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./components/Contact";
import Home, { loader as rootLoader, action as rootAction } from "./pages/Home";

import EditContact, { action as editAction } from "./components/Edit";
import { action as destroyAction } from "./pages/Destroy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          { index: true, element: <Index /> },

          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! Houve um erro.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
