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
      element: <InfoPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>

      {/* 
        Footer 
        The footer is here so that when the content changes, the image doesn't have to reload every time
        */}
      <div className="footer">
        <img
          src={require("./assets/media/yellow-flowers.jpg")}
          alt="field of yellow mustard flowers cropped into a circle"
        />
        <p>
          Designed and Created by Maija Philip &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
