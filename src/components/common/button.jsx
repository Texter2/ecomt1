import React from "react";
import CIcon from "@coreui/icons-react";

const Button = (props) => {
  const { left, width, name, backgroundColor ,color} = props;
  return (
    <button
      style={{
        borderRadius: "0px",
        left: left,
        backgroundColor:backgroundColor||"#2874f0",
        position: "relative",
        width: width,
        height: "30px",
        borderColor: "#2874f0",
        // fontSize: "17px",
        color: color||"white",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
