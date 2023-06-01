// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from "react";
// import { createRoot } from "react-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import App from "./App";

// const theme = createTheme();

// createRoot(document.getElementById("root")).render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>
// );

import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
