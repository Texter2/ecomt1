import React from "react";
import surf from "../assets/menu items/Surf excel.svg";
import phone from "../assets/menu items/phone.svg";
import fashion from "../assets/menu items/fashion.svg";
import electronics from "../assets/menu items/electronics.svg";
import sofa from "../assets/menu items/sofa.svg";
import appliances from "../assets/menu items/appliances.svg";
import travel from "../assets/menu items/travel.svg";
import offers from "../assets/menu items/offers.svg";
import more from "../assets/menu items/more.svg";
import twowheeler from "../assets/menu items/twowheeler.svg";
import Menuhover from "./common/menuHover";

const Dropmenu = () => {
  return (
    <span
      className="menu-container"
      style={{
        margin: "0%",
        paddingLeft: "100%",
        position: "relative",
        top: "9px",
        width: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menuhover image={surf} name={"Grocery"} />
        <Menuhover image={phone} name={"Mobiles"} />
        <Menuhover image={fashion} name={"Fashion"} />
        <Menuhover image={electronics} name={"Electronics"} />
        <Menuhover image={sofa} name={"Home & Furniture"} />
        <Menuhover image={appliances} name={"Appliances"} />
        <Menuhover image={travel} name={"Travel"} />
        <Menuhover image={offers} name={"Top Offers"} />
        <Menuhover image={more} name={"Beauty,Toys & More"} />
        <Menuhover image={twowheeler} name={"Two Wheelers"} />
      </div>
    </span>
  );
};

export default Dropmenu;
