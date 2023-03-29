import React from "react";
import "../assets/css/tshirt.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TShirt = (props) => {
  return (
    <div className="tshirt_container">
      <LazyLoadImage
        src={props.img}
        alt={props.name}
        style={{
          height: "12.44vw",
          width: "12.44vw",
          borderRadius: "6.22vw",
          resize: "contain",
        }}
      />
      <p className="tshirt_text">{props.name}</p>
    </div>
  );
};

export default TShirt;
