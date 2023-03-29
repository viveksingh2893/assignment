import React from "react";
import "../assets/css/trendingTshirt.css";
import Size from "./size";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SvgIcon from "../assets/svgIcon";

const TrendingTShirt = (props) => {
  return (
    <div
      className="trendingTShirt-container"
      style={{ position: "relative" }}
      onMouseEnter={() => props.setHover(props.id)}
      onMouseLeave={() => props.setHover("")}
    >
      {props.hover === props.id ? (
        <>
          <div>
            <LazyLoadImage
              src={props.img}
              alt=""
              style={{ height: "53.6vh", width: "100%", filter: "blur(5px)" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "7vh",
              top: "30%",
              width: "12vw",
              position: "absolute",
            }}
          >
            <div className="trendingTShirt-icons">
              <SvgIcon name="cart" height="3vw" width="3vw" />
            </div>
            <div className="trendingTShirt-icons">
              <SvgIcon name="like" height="3vw" width="3vw" />
            </div>
            <div className="trendingTShirt-icons">
              <SvgIcon name="share" height="3vw" width="3vw" />
            </div>
          </div>
        </>
      ) : (
        <LazyLoadImage
          src={props.img}
          alt=""
          style={{ height: "53.6vh", width: "100%" }}
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "13vw",
        }}
      >
        <p className="trendingTShirt-txt">{props.txt}</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "5.8vw",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          className="trendingTShirt-txt"
          style={{ fontWeight: "700", color: "#1F1F1F" }}
        >
          {props.price}
        </p>
        <p
          className="trendingTShirt-txt"
          style={{
            textDecorationLine: "line-through",
            fontSize: ".8vw",
            color: "#FF0000",
            alignItems: "flex-end",
            lineHeight: "1vw",
            margin: 0,
          }}
        >
          {props.cutprice}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "85%",
          alignItems: "center",
          flexDirection: "row",
          height: "4.7vh",
          justifyContent: "space-between",
        }}
      >
        <Size size="S" />
        <Size size="M" />
        <Size size="L" />
        <Size size="XL" />
        <Size size="XXL" />
      </div>
    </div>
  );
};

export default TrendingTShirt;
