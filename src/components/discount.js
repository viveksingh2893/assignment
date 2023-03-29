import React from "react";
import "../assets/css/landingPage.css";
import SvgIcon from "../assets/svgIcon";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Discount = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "32vw",
        height: "70vh",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3vw",
        background: props.clr,
      }}
    >
      {props.img === "dia" ? (
        <SvgIcon name="diamond" height="10vw" width="10vw" />
      ) : (
        <LazyLoadImage
          src={props.img}
          alt=""
          style={{ height: "10vw", width: "10vw" }}
        />
      )}
      <p
        className="landing_image_text"
        style={{ fontSize: "1.5vw", lineheight: "2vw", color: "#1C1C1C" }}
      >
        Hurry Up!
      </p>
      <p
        className="landing_image_text"
        style={{ fontSize: "4vw", lineheight: "7vw", color: "#1C1C1C" }}
      >
        {props.discount}% OFF
      </p>
      <p
        className="landing_image_text"
        style={{ fontSize: "1.5vw", lineheight: "2.5vw", color: "#1C1C1C" }}
      >
        Sale
      </p>
      <button
        className="landing-btn"
        style={{
          backgroundColor: "transparent",
          margin: 0,
          border: "1px solid #FFFFFF",
        }}
      >
        <p className="landing_text">shop now</p>
      </button>
    </div>
  );
};

export default Discount;
