import React from "react";
import SliderImage from "../assets/slider items/nothing.svg";
import Banner from "../assets/slider items/12_26_banner.jpg";
import { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [image, setImage] = useState([SliderImage, Banner]);
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
            position:'absolute',
            left:'100px'
          }}
        >
          <button
            onClick={() => {
              count > 0 ? setCount(count - 1) : setCount(0);
            }}
            style={{ position: "absolute",left:'113px' }}
          >
            Prev
          </button>
          <div> 
            <img src={image[count]} width="1600px" height="400px" />
          </div>

          <button
            onClick={() => {
              count < image.length - 1 ? setCount(count + 1) : setCount(0);
            }}
            style={{ position: "absolute" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
