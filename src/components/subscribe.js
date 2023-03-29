import React from "react";
import "../assets/css/landingPage.css";
import SvgIcon from "../assets/svgIcon";

const Subscribe = () => {
  return (
    <div className="landing-subscribe-container" style={{position:"relative"}}>
      <p className="landing-subscribe-txt">
        Subscribe to get updates on exciting offers & deals
      </p>
      <div style={{ display: "flex", flexDirection: "row", height: "9vh" }}>
        <input
          name="search"
          placeholder="Enter your email"
          style={{
            height: "99%",
            width: "37vw",
            padding: "0 1vw",
            border: "1px solid #AB001E",
            color:"#FFFFFF",
            background: "rgba(255, 255, 255, 0.32)",
          }}
        />
        <button className="landing-sub-btn">
          <p className="landing_image_text" style={{ color: "#770015" }}>
            Subscribe
          </p>
        </button>
      </div>
      <div style={{position:"absolute", left:"-7vw"}}>
      <SvgIcon name="leftstyle" height="50vh" width="23vw"/> 
      </div>
      <div style={{position:"absolute", right:"-7vw"}}>
      <SvgIcon name="rightstyle" height="50vh" width="23vw"/>
      </div>
    
    </div>
  );
};

export default Subscribe;
