import React from "react";

const Menuhover = (props) => {
  return (
    <div
      className="menu-list"
      style={{ position: "relative", left: "18%"}}
    >
      <div className="menu-item" style={{paddingRight:'40px' }}>
        <a href="http://localhost:3000/">
          <img src={props.image} width="70px"></img>
        </a>
        <div style={{fontSize:'14px',fontFamily:"system-ui",textAlign:'center'}}>{props.name}</div>
      </div>
    </div>
  );
};

export default Menuhover;
