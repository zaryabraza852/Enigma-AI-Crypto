import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import FormattedDate from "./FormattedDate";
import SideBar from "./SideBar";

const Withdraw = () => {
  const [data, setData] = useState([]);

  async function GetUserData() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetUserData?Email=${Cookies.get("email")}`,
      {
        method: "GET",
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
          "Authorization": `Bearer ${Cookies.get("token")}` 
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetUserData();
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
          <div
            style={{
              border: "1px solid #5d5d5e",
              background: "linear-gradient(to right, #171717, #27173c)",
              padding: "20px",
              margin: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="./assets/chart.png"
                style={{ width: "25px", height: "auto" }}
                alt=""
              />
              <span
                style={{
                  color: "#9240b0",
                  fontSize: "14px",
                  marginLeft: "5px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Statistics
              </span>
            </div>

            {data.map((rowData, index) => (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src="./assets/user.png"
                    style={{
                      width: "25px",
                      height: "auto",
                      padding: "5px",
                      background: "linear-gradient(to right, #a37fc0, #be29db)",
                      borderRadius: "20px",
                    }}
                    alt=""
                  />
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {rowData.Username}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "11px",
                    color: "#626262",
                    fontWeight: "bold",
                  }}
                >
                  Joined on <FormattedDate timestamp={rowData.CreatedAt} />
                </p>
              

            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Weekly Profits rate
            </h1>

            <h4
              style={{
                color: "#88f96d",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {rowData.ProfitR}$
            </h4>
            <h5
              style={{
                color: "#88f96d",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {rowData.ProfitP}%
            </h5>

            {/* <div className="d-flex justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-4 mx-auto text-center">
                <h4 style={{ color: "#fff", marginTop: "30px" }}>Day</h4>
                <h6 style={{ color: "#88f96d" }}>334%</h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 mx-auto text-center">
                <h4 style={{ color: "#fff", marginTop: "30px" }}>Week</h4>
                <h6 style={{ color: "#88f96d" }}>334%</h6>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 mx-auto text-center">
                <h4 style={{ color: "#fff", marginTop: "30px" }}>Year</h4>
                <h6 style={{ color: "#88f96d" }}>334%</h6>
              </div>
            </div> */}

            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              Total Balance
            </h1>

            <h4
              style={{
                color: "#88f96d",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {rowData.BotCredit}$
            </h4>
            </div>
            ))}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  width: "200px",
                  borderRadius: "30px",
                  backgroundColor: "#202020",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(to right, #a2416f, #7b2373)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
                onClick={() => {
                  window.location.href = "/CashOut";
                }}
              >
                Withdraw
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
                  Withdraw
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
