import React from "react";
import SideBar from "./SideBar";

const AboutUs = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #190035)",
        // overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <img
          src="./assets/logo.png"
          style={{ width: "70px", height: "auto" }}
          alt=""
        />
      </div> */}

      <SideBar />

      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          paddingBottom: "100px",
        }}
      >
        <div
          class="col-lg-8 col-md-6 mx-auto text-left"
          style={{
            margin: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              margin: "30px",
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #9c8ca3, #b13ee7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
              }}
            >
              About Us{" "}
            </span>
          </h1>

          <h5 style={{ color: "#fff", margin: "20px" }}>
            Introducing Enigma - an exceptional trading robot developed by our
            talented team of developers. Led by our visionary founder, our team
            combines coding expertise. data analysis, and Ul design to create a
            revolutionary tool that dominates financial markets. Join us as we
            reshape the future Of trading With Enigma.
          </h5>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                minWidth: "50px",
                borderRadius: "25px",
                background: "#c731ff",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                window.location.href = "https://t.me/realrichsociety";
              }}
            >
              <img
                src="./assets/telegram.png"
                style={{ width: "25px", height: "auto", marginRight: "3px" }}
                alt=""
              />
            </div>
          </div>
          <h6
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px",
              fontSize: "13px",
            }}
          >
            Learn more about us{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
