import React from "react";
import "./assets/css/constants.css";
import "./assets/css/styles.css";

import ReactDOM from "react-dom/client";
import { SiteRouter } from "./SiteRouter";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Creates the theme for MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#261E08" },
    secondary: { main: "#261E08" },
    text: {
      primary: "#261E08",
      secondary: "#261E08",
    },
    background: { default: "#F2F3F4" },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SiteRouter />
    </ThemeProvider>
  </React.StrictMode>
);
