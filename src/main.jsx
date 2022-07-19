import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    dark: "#141416",
    accent: "#5e50ed",
  },
};

const font = {
  body: "system-ui, sans-serif",
  main: "https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap",
};

const theme = extendTheme({ colors, font });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
