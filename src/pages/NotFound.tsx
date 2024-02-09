import React from "react";
import { Link } from "react-router-dom";
import { alrt } from "@src/assets/NotFound.module.css";

export function NotFound(): React.JSX.Element {
  return (
    <div className={alrt}>
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
}
