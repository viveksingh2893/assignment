import React from "react";
import {Routes, Route} from 'react-router-dom';
import LandingPage from "./landingPage";


const Screens =()=>{
    return(
        <div style={{minHeight:"100vh",maxWidth:'100vw',backgroundColor:'white'}}>
            <Routes>  
                <Route path="/" element={<LandingPage/>} />
            </Routes>
        </div>
    )
}

export default Screens;