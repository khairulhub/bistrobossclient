import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom";

import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import AuthProvider from "./Provider/AuthProvider.jsx";
import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
