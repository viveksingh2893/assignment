import React from "react";
import "../assets/css/services.css"
import SvgIcon from "../assets/svgIcon";

const Services=(props)=>{
    return(
        <div className="services">
            <SvgIcon name={props.name} height="5.5vw" width="5.5vw"/>
            <p>{props.text}</p>
        </div>
    )
}

export default Services; 