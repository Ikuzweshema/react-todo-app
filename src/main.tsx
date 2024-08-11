import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/context/themeContext";
import { Suspense } from "react";
import Loading from "./components/loading";
// Ensure the root element is not null
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster position="top-right" />
      <Suspense fallback={<Loading />}><App /></Suspense>

    </ThemeProvider>
  </React.StrictMode>
);
