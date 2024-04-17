import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DestinationsProvider } from "./components/Context/destinationsContext";
import { ImagesProvider } from "./components/Context/imagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DestinationsProvider>
      <ImagesProvider>
        <App />
      </ImagesProvider>
    </DestinationsProvider>
  </React.StrictMode>
);
