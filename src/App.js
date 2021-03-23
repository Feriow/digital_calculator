import React from "react";
import Calculator from "./containers/calculator";
import "./app.css";

export function App() {
  return (
    <div className={"screen"}>
      <h1 className={"title"}>Digital Calculator</h1>

      <Calculator />

      <h4 className={"copyright"}>by Feriow &#169;</h4>
    </div>
  );
}
