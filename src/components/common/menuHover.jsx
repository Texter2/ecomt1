import React, { useState } from "react";

const Hovermenu = ({ props }) => {
  const keysArray = Object.keys(props);
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        position: "absolute",
        backgroundColor: "white",
        zIndex: "1",
      }}
    >
      <ul>
        {keysArray?.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
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
    setMenuState(!menuState);
  };
  return (
    <div className="menu-list" onMouseOver={handleTouchEvent}>
      <div
        className="menu-item"
        style={{ paddingLeft: "12px", paddingRight: "12px", border: "0px" }}
      >
        <a href="http://localhost:3000/">
          <img src={props.image} width="70px"></img>
        </a>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "system-ui",
            textAlign: "center",
          }}
        >
          {props.name}
        </div>
      </div>
      {menuState ? <Hovermenu props={data} /> : <></>}
    </div>
  );
};

export default Menuhover;
