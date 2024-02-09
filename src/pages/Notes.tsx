import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Notes(): React.JSX.Element {
  const notes = [1, 2, 3, 4, 5];

  return (
    <div>
      {notes.map((note) => (
        <Link key={note} to={`/notes/${note}`}>
          Note {note}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
