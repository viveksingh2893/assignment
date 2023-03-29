import React from "react";
import "../assets/css/headerMenu.css";
import SvgIcon from "../assets/svgIcon";
import likes from "../assets/images/likes.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeaderMenu = () => {
  return (
    <div className="headermenu_container">
      <div className="headermenu">
        <div className="headermenu_burger">
          <SvgIcon name="burgermenu" height="1.5vw" width="1.5vw" />
        </div>

        <p className="headermenu_text">Logo Here</p>
        <div className="headermenu_options">
          <div className="headermenu_icons">
            <SvgIcon name="search" height="1.5vw" width="1.5vw" />
          </div>
          <div className="headermenu_icons">
            <LazyLoadImage
              src={likes}
              alt="Likes"
              style={{ height: "1.5vw", width: "1.5vw" }}
            />
          </div>
          <div className="headermenu_icons">
            <SvgIcon name="store" height="1.5vw" width="1.5vw" />
          </div>
          <div className="headermenu_icons">
            <SvgIcon name="person" height="1.5vw" width="1.5vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
