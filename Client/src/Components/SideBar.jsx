import React, { useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const SideBar = () => {
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const { t } = useTranslation();

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
    window.location.href = "/home";
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
        <a href="/home">{t('home')}</a>
        {Cookies.get("login") ? (
          null
        ) : (
          <a style={{ color: "#fff" }} href="/SignUp">
           {t('get_started')}
          </a>
        )}
        <a href="/Faq">{t('faq')}</a>
        <a href="/AboutUs">{t('about_us')}</a>
        <a href="https://t.me/realrichsociety">{t('contact_us')}</a>
        {Cookies.get("login") ? (
          <a
            style={{ color: "#fff" }}
            onClick={() => {
              logout();
            }}
          >
             {t('logout')}
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
          <div style={{ width: "60px" }}>
          <LanguageSelector />
          </div>
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
