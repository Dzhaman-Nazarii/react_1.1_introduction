import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Card } from "./components/Card";

// const root = document.getElementById("root");
// const descr = (
//   <p name="description" classNameName="p-descr-className">
//     Hello react!
//   </p>
// );

// const div = (
//   <div name="main" classNameName="div-main-className">
//     {descr}
//   </div>
// );

// ReactDOM.createRoot(root).render(div);
// console.log(div);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Card />);
