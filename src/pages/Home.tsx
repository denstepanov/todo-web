import React from "react";
import { hdr } from "@src/assets/Home.module.css";
import { Counter } from "@src/components/Counter";

export function Home(): React.JSX.Element {
  return (
    <div className={hdr}>
      <h1>lorem ipsum</h1>
      <Counter />
    </div>
  );
}
