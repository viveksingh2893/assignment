import React, { useState } from "react";
import "../assets/css/landingPage.css";
import Header from "../components/header";
import HeaderMenu from "../components/headerMenu";
import TShirt from "../components/tShirt";
import TrendingTShirt from "../components/trendingTShirt";
import Image from "../components/image";
import Dis from "../assets/images/discount.svg";
import Discount from "../components/discount";
import Services from "../components/services";
import data from "../components/productList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Subscribe from "../components/subscribe";
import SvgIcon from "../assets/svgIcon";
import Footer from "../components/footer";

const LandingPage = () => {
  const [hover, setHover] = useState("");
  return (
    <div className="landing_screen">
      <Header />
      <HeaderMenu />
      <div className="banner" style={{ marginTop: "17.7vh" }}>
        <LazyLoadImage
          src={data["banner"][0]["image"]}
          alt="banner"
          style={{ height: "100%", width: "100%", resize: "contain" }}
        />
      </div>
      <div
        style={{
          padding: "0 9.5vw",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="landing_tshirt">
          {data.tshirt?.map((item, i) => {
            return (
              <div key={i}>
                <TShirt img={item.image} name={item.name} bckcolor="#D3EAEB" />
              </div>
            );
          })}
        </div>
        <div className="landing_collection">
          {data.fullSleeves1?.map((item, i) => {
            return (
              <div key={i}>
                <LazyLoadImage
                  src={item.image}
                  alt="baggy"
                  style={{ width: "38.5vw", height: "36vh" }}
                />
              </div>
            );
          })}
        </div>
        <div className="landing_collection" style={{ height: "25vh" }}>
          {data.fullSleeves2?.map((item, i) => {
            return (
              <div key={i}>
                <LazyLoadImage
                  src={item.image}
                  alt="baggy"
                  style={{ width: "25vw", height: "25vh" }}
                />
              </div>
            );
          })}
        </div>
        <div className="landing_head">
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
          <h1 className="landing_heading">Trending T-Shirts</h1>
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
        </div>
        <div className="landing_TrendingTShirt">
          {data.trendingTshirt?.map((item, i) => {
            return (
              <div key={i + "first"}>
                <TrendingTShirt
                  setHover={setHover}
                  id={i + "first"}
                  img={item.image}
                  txt={item.txt}
                  price={item.price}
                  cutprice={item.cutprice}
                />
              </div>
            );
          })}
        </div>
        <div className="landing_TrendingTShirt" style={{ marginTop: "5vh" }}>
          {data.trendingTshirt?.map((item, i) => {
            return (
              <div key={i + "second"}>
                <TrendingTShirt
                  setHover={setHover}
                  hover={hover}
                  id={i + "second"}
                  img={item.image}
                  txt={item.txt}
                  price={item.price}
                  cutprice={item.cutprice}
                />
              </div>
            );
          })}
        </div>
        <button className="landing-btn">
          <p className="landing_text">VIEW all</p>
        </button>
        <div className="landing_head">
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
          <h1 className="landing_heading">Featured Products</h1>
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
        </div>
        <div className="landing_TrendingTShirt">
          {data.trendingTshirt?.map((item, i) => {
            return (
              <div key={i + "third"}>
                <TrendingTShirt
                  setHover={setHover}
                  hover={hover}
                  id={i + "third"}
                  img={item.image}
                  txt={item.txt}
                  price={item.price}
                  cutprice={item.cutprice}
                />
              </div>
            );
          })}
        </div>
        <button className="landing-btn">
          <p className="landing_text">VIEW all</p>
        </button>
      </div>
      <div className="banner" style={{ height: "65.1vh" }}>
        <LazyLoadImage
          src={data["banner"][1]["image"]}
          alt="banner"
          style={{ height: "100%", width: "100%", resize: "contain" }}
        />
      </div>
      <div
        style={{
          padding: "0 9.5vw",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="landing_head">
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
          <h1 className="landing_heading">New Products</h1>
          <div style={{ border: "1px solid #FFC7D1", width: "28vw" }} />
        </div>
        <div className="landing_TrendingTShirt">
          {data.trendingTshirt?.map((item, i) => {
            return (
              <div key={i + "fourth"}>
                <TrendingTShirt
                  setHover={setHover}
                  hover={hover}
                  id={i + "fourth"}
                  img={item.image}
                  txt={item.txt}
                  price={item.price}
                  cutprice={item.cutprice}
                />
              </div>
            );
          })}
        </div>
        <button className="landing-btn">
          <p className="landing_text">VIEW all</p>
        </button>
        <div className="landing_head">
          <div style={{ border: "1px solid #FFC7D1", width: "25vw" }} />
          <h1 className="landing_heading">Best Selling Products</h1>
          <div style={{ border: "1px solid #FFC7D1", width: "25vw" }} />
        </div>
        <div className="landing_TrendingTShirt">
          {data.trendingTshirt?.map((item, i) => {
            return (
              <div key={i + "fifth"}>
                <TrendingTShirt
                  setHover={setHover}
                  hover={hover}
                  id={i + "fifth"}
                  img={item.image}
                  txt={item.txt}
                  price={item.price}
                  cutprice={item.cutprice}
                />
              </div>
            );
          })}
        </div>
        <button className="landing-btn">
          <p className="landing_text">VIEW all</p>
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {data.halfSleeves?.map((item, i) => {
            return (
              <div key={i}>
                <Image img={item.image} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner" style={{ height: "65.1vh", margin: "10vh 0" }}>
        <LazyLoadImage
          src={data["banner"][2]["image"]}
          alt="banner"
          style={{ height: "100%", width: "100%", resize: "contain" }}
        />
      </div>
      <div
        style={{
          padding: "0 9.5vw",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="landing_collection" style={{ height: "85vh" }}>
          <Discount img="dia" clr="#CCCEA7" discount="85" />
          <Discount img={Dis} clr="#D6BEBE" discount="75" />
        </div>
      </div>
      <div className="landing_services_container">
        <Services name="return" text="7 Days Return" />
        <Services name="quality" text="Quality Products" />
        <Services name="safe" text="Safe Payment" />
        <Services name="helpline" text="24x7 Helpline" />
      </div>
      <div
        style={{
          padding: "0 9.5vw",
        }}
      >
        <Subscribe />
      </div>
      <div
        style={{
          border: "1px solid #E0DFDE",
          width: "97.5vw",
          margin: "5vh 0",
        }}
      />
      <div
        style={{
          padding: "0 9.5vw",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30vh",
        }}
      >
        <div className="landing-company-info" style={{ flex: 1.5 }}>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries....
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <SvgIcon name="facebook" height="2vw" width="2vw" />
            <SvgIcon name="twitter" height="2vw" width="2vw" />
            <SvgIcon name="instagram" height="2vw" width="2vw" />
            <SvgIcon name="linkedin" height="2vw" width="2vw" />
            <SvgIcon name="pinterest" height="2vw" width="2vw" />
          </div>
        </div>
        <div className="landing-company-info">
          <p className="landing_image_text" style={{ color: "#770015" }}>
            ONLINE SHOPPING
          </p>
          <p
            className="landing_text"
            style={{ color: "#1C1C1C", marginTop: "2vh" }}
          >
            Men’s T-Shirts{" "}
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Women’s Wear
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            {" "}
            Winter Collections
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Hooded T-Shirts
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Streetwear Collections
          </p>
        </div>
        <div className="landing-company-info">
          <p className="landing_image_text" style={{ color: "#770015" }}>
            ONLINE SHOPPING
          </p>
          <p
            className="landing_text"
            style={{ color: "#1C1C1C", marginTop: "2vh" }}
          >
            Men’s T-Shirts{" "}
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Women’s Wear
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            {" "}
            Winter Collections
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Hooded T-Shirts
          </p>
          <p className="landing_text" style={{ color: "#1C1C1C" }}>
            Streetwear Collections
          </p>
        </div>
        <div className="landing-company-info">
          <p className="landing_image_text" style={{ color: "#770015" }}>
            STORE INFORMATION
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SvgIcon name="location" height="2vw" width="2vw" />
            <p
              className="landing_text"
              style={{ color: "#1C1C1C", width: "20vw", marginLeft: "1vw" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SvgIcon name="blacktelephone" height="2vw" width="2vw" />
            <p
              className="landing_text"
              style={{ color: "#1C1C1C", width: "20vw", marginLeft: "1vw" }}
            >
              Call Us: 1234567890
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SvgIcon name="email" height="2vw" width="2vw" />
            <p
              className="landing_text"
              style={{ color: "#1C1C1C", width: "20vw", marginLeft: "1vw" }}
            >
              Email Us: info@yourmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div
        style={{
          position: "absolute",
          top:"1090vh",
          left:"3vw",
          transform: "translate(-50%, -50%)",
          width: "8vw",
          height: "16vw",
          borderRadius: "0 8vw 8vw 0",
          background: "#770015",
        }}
      />
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top:"1062vh",
          right:"-4vw",
          width: "8vw",
          height: "16vw",
          borderRadius: "8vw 0 0 8vw",
          background: "#770015",
        }}
      />
    </div>
  );
};

export default LandingPage;
