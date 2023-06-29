import React from "react";
import SliderImage from "../assets/slider items/nothing.svg";
import Banner from "../assets/slider items/12_26_banner.jpg";
import { useState } from "react";

const Slider = () => {
  const [image, setImage] = useState([SliderImage, Banner]);
  const [count, setCount] = useState(0);
  return (
    <div className="slider-container">
      <div>
        <button
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(0);
          }}
        >
          Prev
        </button>
        <img src={image[count]} width="70%" />
        <button
          onClick={() => {
            count < image.length - 1 ? setCount(count + 1) : setCount(0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Slider;
