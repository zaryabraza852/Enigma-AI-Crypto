import React, { useState } from "react";
import Cookies from "js-cookie";

const SideBar = () => {
  const [sidenavWidth, setSidenavWidth] = useState(0);

  const openNav = () => {
    setSidenavWidth(180);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

  function logout() {
    Cookies.remove("login");
    Cookies.remove("email");
    Cookies.remove("token");
    window.location.href = "/";
  }

  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sidenavWidth}px` }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="/">Home</a>
        {Cookies.get("login") ? (
          null
        ) : (
          <a style={{ color: "#fff" }} href="/SignUp">
            Get Started
          </a>
        )}
        <a href="/Faq">FAQ</a>
        <a href="/AboutUs">About Us</a>
        <a href="https://t.me/realrichsociety">Contact Us</a>
        {Cookies.get("login") ? (
          <a
            style={{ color: "#fff" }}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </a>
        ) : (
          null
        )}
      </div>

      <nav
        style={{
          backgroundColor: "#00000000",
          paddingTop: "50px",
          paddingBottom: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "60px" }}></div>
          <div style={{ marginRight: "auto", marginLeft: "auto" }}>
            <a href="/">
            <img
              src="./assets/logo.png"
              style={{ width: "70px", height: "auto" }}
              alt=""
            />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={openNav}
            style={{
              marginRight: "30px",
              border: "none",
              background: "transparent",
              color: "#fff",
              fontSize: "24px",
            }}
          >
            &#9776;
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
