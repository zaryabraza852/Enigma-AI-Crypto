import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CryptoAddy = () => {
  const [Ethereum, setEthereum] = useState("");
  const [BTC, setBTC] = useState("");

  const UpdateCoin = async (e) => {
    e.preventDefault();
    // Validation for Ethereum address
    if (Ethereum.length < 26) {
      alert("Ethereum address must be at least 26 characters.");
      return;
    }
    // Validation for BTC address
    if (BTC.length < 26) {
      alert("BTC address must be at least  26 characters.");
      return;
    }
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI}/UpdateCoin?Ethereum=${Ethereum}&BTC=${BTC}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_API_KEY,
            "Authorization": `Bearer ${Cookies.get("token")}`
          },
        }
      );
  
      const responseData = response.data;
  
      if (responseData.message === "already") {
        // alert("EMAIL ALREADY EXISTS");
      } else {
        form.reset();
        alert("Updated Successfully");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  async function GetCoin() {
    await fetch(`${process.env.REACT_APP_URI}/GetCoin`, {
      method: "GET",
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
        "Authorization": `Bearer ${Cookies.get("token")}`
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed.");
        }
        return response.json();
      })
      .then((data) => {
        setEthereum(data.data[0].Ethereum);
        setBTC(data.data[0].BTC);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetCoin();
  }, []);

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <a href="/">
        <img
          src="./assets/logo.png"
          style={{ width: "70px", height: "auto" }}
          alt=""
        />
        </a>
      </div>

      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          paddingBottom: "100px",
        }}
      >
        <div
          class="col-lg-4 col-md-6 mx-auto text-left"
          style={{
            margin: "10px",
          }}
        >
          <form
            action="#"
            class="Bot_form"
            id="SignUp_form"
            onSubmit={UpdateCoin}
          >
            <div
              style={{
                border: "2px solid #ffffff",
                background: "linear-gradient(to right, #000000, #0c001d)",
                padding: "10px",
                margin: "10px",
                marginTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "10px",
              }}
            >
              <h6
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Bitcoin Address
              </h6>
              <div style={{ textAlign: "center" }}>
                <input
                  type="text"
                  style={{
                    width: "90%",
                    background: "#00000000",
                    borderRadius: "5px",
                    border: "1px solid #fff",
                    color: "#fff",
                    fontSize: "14px",
                    paddingLeft: "5px",
                  }}
                  value={BTC}
                  onChange={(e) => {
                    setBTC(e.target.value);
                  }}
                />
              </div>

              <h6
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Eth Address
              </h6>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <input
                  type="text"
                  style={{
                    width: "90%",
                    background: "#00000000",
                    borderRadius: "5px",
                    border: "1px solid #fff",
                    color: "#fff",
                    fontSize: "14px",
                    paddingLeft: "5px",
                  }}
                  value={Ethereum}
                  onChange={(e) => {
                    setEthereum(e.target.value);
                  }}
                />
              </div>

              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <button
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100px",
                    borderRadius: "30px",
                    backgroundColor: "#202020",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    maxWidth: "250px",
                    padding: "10px",
                    border: "none",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage:
                      "linear-gradient(to right, #1c91fe, #1c91fe)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CryptoAddy;
