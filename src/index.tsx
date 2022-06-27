import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";

import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import ReactDOM from "react-dom/client";

let rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv)
root.render(<App />);