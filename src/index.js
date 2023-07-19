import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Dropmenu from "./components/dropmenu";
import reportWebVitals from "./reportWebVitals";
import Slider from "./components/slider";
import Discount from "./components/discount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Dropmenu />
    <br />
    <Slider />
    <Discount />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
