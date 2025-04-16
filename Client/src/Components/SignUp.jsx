import React, { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const {t} = useTranslation();
  const [value, setvalue] = useState(null);
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

    const form = e.target;
    const formData = new FormData(form);
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("cpassword").value;

    // Password length validation
    if (password.length < 8 || password.length > 10) {
      alert("Password must be between 8 and 10 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI}/SignUp`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_API_KEY,
          },
        }
      );

      const responseData = response.data;

      if (responseData.message === "already") {
        alert("EMAIL OR USERNAME ALREADY EXISTS");
      } else {
        form.reset();
        alert("SignUp Successfully");
        window.location.href = "/Login";
      }
    } catch (error) {
      console.error("Error:", error.message);
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
      <h1 style={{ color: "#fff", marginTop: "20px" }}> {t("create")} {t("my")} {t("account")}</h1>
      <div
        class="row"
        style={{
          marginLeft: "1px",
          marginRight: "1px",
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
          id="SignUp_form"
          onSubmit={handleSubmit}
        >
          <div class="col-lg-3 col-md-6 mx-auto text-left">
            <input
              type="email"
              placeholder={t("email")}
              name="Email"
              required
              style={{
                backgroundColor: "#202020",
                textAlign: "center",
                color: "#fff",
                width: "100%",
                padding: "10px",
                borderRadius: "30px",
              }}
            />
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
              id="password"
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
              placeholder={t("confirm_password")}
              name="Confirm Password"
              id="cpassword"
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
                //sitekey="6LcgPdkpAAAAAPoqLs3v2M3AMayB3tK3RdBS7L_L"
                sitekey="6Ldc7QArAAAAAF9YypBqrVHoR0h2bBARN5Q-DyP2"
                onChange={onChange}
                style={{ background: "none", marginTop: "20px", width: "100%" }}
              />
            </div>

            <button
              type="submit"
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
              }}
            >
              {t("sign_up")}
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
                  pointerEvents: "none", // Make sure the span doesn't interfere with button clicks
                }}
              >
               {t("sign_up")}
              </span>
            </button>

            <div style={{ textAlign: "center" }}>
              <a
                href="/Login"
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {t("login")}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
