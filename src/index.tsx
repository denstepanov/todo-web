import { createRoot } from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "@src/state/store";
import { router } from "@src/router";

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
