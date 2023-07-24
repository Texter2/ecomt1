import React, { useState } from "react";
import downdrop from "../../assets/downdrop.svg";
import "./menuHover.css";

const Hovermenu = ({ props }) => {
  const keysArray = Object.keys(props);
  return (
    <div
      style={{
        width: "400px",
        height: "200px",
        position: "absolute",
        backgroundColor: "white",
        zIndex: "1",
      }}
    >
      {keysArray?.map((el, index) => {
        return (
          <button
            key={index}
            style={{
              height: "50px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {el.replace(/_/g, " ")}
          </button>
        );
      })}
    </div>
  );
};

const data = {
  mens_top_wear: {
    All: [],
    "Men's T-shirts": [],
    "Men's Jeans": [],
    "Men's Casual Shirts": [],
    "Men's Formal Shirts": [],
    "Men's Kurtas": [],
    "Men's Ethnic Sets": [],
    "Men's Blazer": [],
  },
  mens_bottom_wear: {
    All: [],
    "Men's T-shirts": [],
    "Men's Jeans": [],
    "Men's Casual Shirts": [],
    "Men's Formal Shirts": [],
    "Men's Kurtas": [],
    "Men's Ethnic Sets": [],
    "Men's Blazer": [],
  },
  womens_top_wear: {
    All: [],
    "Women's T-shirts": [],
    "Women's Jeans": [],
    "Women's Casual Shirts": [],
    "Women's Formal Shirts": [],
    "Women's Kurtas": [],
    "Women's Ethnic Sets": [],
    "Women's Blazer": [],
  },
  womens_bottom_wear: {
    All: [],
    "Women's T-shirts": [],
    "Women's Jeans": [],
    "Women's Casual Shirts": [],
    "Women's Formal Shirts": [],
    "Women's Kurtas": [],
    "Women's Ethnic Sets": [],
    "Women's Blazer": [],
  },
};

const Menuhover = (props) => {
  const [menuState, setMenuState] = useState(false);

  const handleTouchEvent = () => {
    setMenuState(true);
  };
  const handleOutEvent = () => {
    setMenuState(false);
  };
  return (
    <div
      className="menu-list"
      onMouseOver={handleTouchEvent}
      onMouseOut={handleOutEvent}
    >
      <div
        className="menu-item"
        style={{
          paddingLeft: "12px",
          paddingRight: "12px",
          border: "0px",
          textAlign: "center",
        }}
      >
        <a href="http://localhost:3000/">
          <img src={props.image} width="70px"></img>
        </a>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "system-ui",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {props.name} &nbsp;
          </div>
          {props.dropmenu ? (
            <div className="rotate_1">
              <img src={downdrop} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {menuState && props.dropmenu ? <Hovermenu props={data} /> : <></>}
    </div>
  );
};

export default Menuhover;
