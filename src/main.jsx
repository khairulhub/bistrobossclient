import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom";

import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import AuthProvider from "./Provider/AuthProvider.jsx";
import { router } from "./Routes/Routes.jsx";


const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
    </QueryClientProvider>
  
    </AuthProvider>
  </StrictMode>
);
