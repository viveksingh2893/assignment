import React from "react";
import "../assets/css/trendingTshirt.css";

const Size = (props) => {
  return (
    <div
      style={{
        display: "flex",
        border: " 1px solid #E6E6E6",
        alignItems: "center",
        justifyContent: "center",
        height: "4.7vh",
        width: "2.5vw",
        cursor:"pointer"
      }}
    >
      <p className="trendingTShirt-txt">{props.size}</p>
    </div>
  );
};

export default Size;
