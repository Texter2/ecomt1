import React from "react";
import first from "../assets/slider items/1.webp";
import second from "../assets/slider items/2.webp";
import third from "../assets/slider items/3.webp";
import fourth from "../assets/slider items/4.webp";
import { useState } from "react";
import "./slider.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Slider = () => {
  const [image, setImage] = useState([first, second, third, fourth]);
  const [count, setCount] = useState(0);
  return (
    <div className="slider-container">
      <div className="sider-transform-baner">
        <div
          style={{
            overflow: "hidden",
            width: "90%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            position: "absolute",
            left: "100px",
          }}
        >
          <button
            onClick={() => {
              count > 0 ? setCount(count - 1) : setCount(count + 1);
            }}
            style={{ position: "absolute", left: "0px" }}
          >
            <img src={left} width={"35"} height={"90px"}></img>
          </button>

          <div>
            <img src={image[count]} width="min-content" height="290px" />
          </div>
          <button
            onClick={() => {
              count < image.length - 1 ? setCount(count + 1) : setCount(0);
            }}
            style={{ position: "absolute" }}
          >
            <img src={right} width={"35"} height={"90"}></img>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
