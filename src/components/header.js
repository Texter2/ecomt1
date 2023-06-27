import image from "../assets/Capture.PNG";
import Button from "./common/button";
import { cilCart } from "@coreui/icons";

function Header() {
  return (
    <div style={{ height: "56px", backgroundColor: "#2874f0", margin: "-8px" }}>
      <img
        src={image}
        style={{
          width: "85px",
          height: "35px",
          left: "359px",
          bottom: "-8px",
          position: "relative",
        }}
      />

      <div style={{ position: "relative", bottom: "32px", left: "450px" }}>
        <input
          type="search"
          placeholder="Search..."
          style={{ width: "400px", height: "35px" }}
        />

        <Button
          left={"50px"}
          width={"100px"}
          name={"Login"}
          backgroundColor={"white"}
          color={"black"}
        />
        <Button left={"65px"} width={"150px"} name={"Become a Seller"} />
        <Button left={"80px"} width={"110px"} name={"More"} />
        <Button left={"120px"} width={"110px"} name={"Cart"} icon={cilCart} />
      </div>
    </div>
  );
}

export default Header;
