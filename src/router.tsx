// https://reactrouter.com/en/main
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@src/pages/NotFound";
import { Profile } from "@src/pages/Profile";
import { Notes } from "@src/pages/Notes";
import { Note } from "@src/pages/Note";
import { Home } from "@src/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/profiles/:profileId",
    element: <Profile />,
  },
  {
    path: "/notes",
    element: <Notes />,
    children: [
      {
        path: "/notes/:noteId",
        element: <Note />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
