import React from "react";
import "./assets/css/constants.css";
import "./assets/css/styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SpecificListPage from "./pages/SpecificListPage";
import InfoPage from "./pages/InfoPage";

export const SiteRouter = () => {
  // all the pages you can navigate to
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/development",
      element: <SpecificListPage pageType="development" />,
    },
    {
      path: "/design",
      element: <SpecificListPage pageType="design" />,
    },
    {
      path: "/art",
      element: <SpecificListPage pageType="art" />,
    },
    {
      path: "/info/:item",
      element: <InfoPage/>,
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  );
};
