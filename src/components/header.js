import React from "react";
import "../assets/css/header.css";
import SvgIcon from "../assets/svgIcon";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        <p className="header_text">Welcome to Our Store Hiscraves</p>
        <div className="header_contactme">
          <SvgIcon name="telephone" />
          <p className="header_text">Call Us: 1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
