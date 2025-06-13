// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Assignemnt } from "./screens/Assignemnt";

// createRoot(document.getElementById("app") as HTMLElement).render(
//   <StrictMode>
//     <Assignemnt />
//   </StrictMode>,
// );
