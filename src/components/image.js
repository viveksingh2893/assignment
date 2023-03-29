import React from "react";
import "../assets/css/landingPage.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
          height: "57vh",
          width: "26.4vw",
          marginTop: "5vh",
        }}
      >
        <LazyLoadImage src={props.img} alt="" />
        <div
          style={{
            display: "flex",
            background:
              "linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)",
            backdropFilter: "blur(12px)",
            justifyContent: "center",
            alignItems: "center",
            height: "6.9vh",
            width: "100%",
            position: "absolute",
            bottom: -2,
          }}
        >
          <p className="landing_image_text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
