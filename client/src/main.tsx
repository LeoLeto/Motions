import "./index.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SidebarLayout from "./components/layout/SidebarLayout.tsx";
import Login from "./pages/login/Login.tsx";

const router = createBrowserRouter([
  { path: "*", element: <Navigate to="/dashboard" replace /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <SidebarLayout />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
      dark: grey[300],
      contrastText: "#494949",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          fontWeight: 600,
          transition: ".3s",
          "&:hover": {
            borderRadius: 7,
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
