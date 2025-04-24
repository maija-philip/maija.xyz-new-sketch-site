import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

export const SiteRouter = () => {
  // all the pages you can navigate to
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  );
};
