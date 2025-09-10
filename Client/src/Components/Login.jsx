import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import SideBar from "./SideBar";

const Login = () => {
  const { t } = useTranslation();
  const [value, setvalue] = useState(null);
  const [loading, setLoading] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setvalue(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value === null) {
      alert("Please verify captcha");
      return;
    }

    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI}/Login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_API_KEY,
          },
        }
      );
      const responseData = response.data;
      if (responseData.message === "success") {
        alert("Login successful");
        Cookies.set("email", responseData.email, { expires: 2 });
        Cookies.set("login", true, { expires: 2 });

        Cookies.set("token", responseData.token, { expires: 2 });
        if (responseData.role === 1) {
          Cookies.set("role", "Admin", { expires: 2 });
          window.location.href = `/`;
        } else {
          Cookies.set("role", "User", { expires: 2 });
          window.location.href = `/`;
        }
      } else if (responseData.message === "Invalid credentials") {
        alert("INVALID USERNAME OR PASSWORD");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data); // logs { message: "Invalid credentials" }
        if (error.response.data.message === "Invalid credentials") {
          alert("INVALID USERNAME OR PASSWORD");
        }
      } else {
        console.error("Network or unknown error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #180034)",
        // display: 'flex',
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
      }}
    >
      <SideBar />

      <h1 style={{ color: "#fff", marginTop: "20px" }}> {t("login")}</h1>
      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "60px",
        }}
      >
        <form
          action="#"
          class="contact_form"
          id="contact_form"
          onSubmit={handleSubmit}
        >
          <div class="col-lg-3 col-md-6 mx-auto text-left">
            <input
              type="text"
              placeholder={t("username")}
              name="Username"
              required
              style={{
                backgroundColor: "#202020",
                textAlign: "center",
                color: "#fff",
                width: "100%",
                padding: "10px",
                marginTop: "15px",
                borderRadius: "30px",
              }}
            />
            <input
              type="password"
              placeholder={t("password")}
              name="Password"
              required
              style={{
                backgroundColor: "#202020",
                textAlign: "center",
                color: "#fff",
                width: "100%",
                padding: "10px",
                marginTop: "15px",
                borderRadius: "30px",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReCAPTCHA
                sitekey="6Ldc7QArAAAAAF9YypBqrVHoR0h2bBARN5Q-DyP2"
                onChange={onChange}
                style={{ background: "none", marginTop: "20px", width: "100%" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "#202020",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px",
                border: "none",
                position: "relative",
                overflow: "hidden",
                backgroundImage: "linear-gradient(to right, #c43b7d, #8d1182)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid #fff",
                      borderTop: "3px solid #c43b7d",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                      display: "inline-block",
                    }}
                  ></span>
                  <style>
                    {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
                  </style>
                </span>
              ) : (
                <>
                  {t("login")}
                  <span
                    style={{
                      position: "absolute",
                      width: "99%",
                      height: "93%",
                      top: "50%",
                      left: "50%",
                      padding: "10px",
                      paddingTop: "7px",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "30px",
                      zIndex: 10,
                      background: "#202020",
                      pointerEvents: "none",
                    }}
                  >
                    {t("login")}
                  </span>
                </>
              )}
            </button>

            <div style={{ textAlign: "center" }}>
              <a
                href="/SignUp"
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {t("create")} {t("an")} {t("account")}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
