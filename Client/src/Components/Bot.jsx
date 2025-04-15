import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Cookies from "js-cookie";

const Bot = () => {
  const [value, setvalue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [date, setDate] = useState("");

  const [data, setData] = useState([]);

  async function GetUserPosition() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetUserPosition?Email=${Cookies.get(
        "email"
      )}`,
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
    GetUserPosition();
  }, []);

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
        setvalue(data.data[0].BotCredit);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetUserData();
  }, []);

  function updateCountdown(endDate) {
    const now = new Date();
    const timeDifference = endDate.getTime() - now.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    setActive(new Date(date) > sevenDaysAgo);
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `End In : ${days}d ${hours}h ${minutes}m ${seconds}s`;
    // setTemp(`Start In : ${days}d ${hours}h ${minutes}m ${seconds}s`)

    // Update every second
    setTimeout(() => updateCountdown(endDate), 1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue >= 200) {
      if (inputValue <= value) {
        const form = e.target;
        const formData = new FormData(form);
        try {
          const response = await axios.post(
            `${
              process.env.REACT_APP_URI
            }/Bot?Amount=${inputValue}&Email=${Cookies.get("email")}`,
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
            alert("Bot Launch Successfully");
            window.location.href = "/Bot";
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      } else {
        alert("Error: Input value exceeds the limit.");
      }
    } else {
      alert(`Error: Input value must greater than 200.`);
    }
  };

  async function GetBotDate() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetBotDate?email=${Cookies.get("email")}`,
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
        setDate(data.data[0].CreatedAt);
        console.log(data.data);
        // GetMessages();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderRows = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((rowData, index) => (
      <tr key={index} style={{ borderBottom: "1px solid #47474c" }}>
        <td
          style={{
            background: "#00000000",
            color: "#fff",
            whiteSpace: "nowrap",
            fontSize: "12px",
            padding: "7px",
            paddingLeft: "0px",
            textAlign: "center",
          }}
        >
          {rowData.Assets}
        </td>
        <td
          style={{
            background: "#00000000",
            color: "#fff",
            whiteSpace: "nowrap",
            fontSize: "12px",
            padding: "7px",
            paddingLeft: "0px",
            textAlign: "center",
          }}
        >
          {rowData.EntryPoint}$
        </td>
        {parseFloat(rowData.ProfitLoss) < 0 ? (
          <td
            style={{
              background: "#00000000",
              color: "red",
              whiteSpace: "nowrap",
              fontSize: "12px",
              padding: "7px",
              paddingLeft: "0px",
              textAlign: "center",
            }}
          >
            {rowData.ProfitLoss}$
          </td>
        ) : (
          <td
            style={{
              background: "#00000000",
              color: "#30cc0c",
              whiteSpace: "nowrap",
              fontSize: "12px",
              padding: "7px",
              paddingLeft: "0px",
              textAlign: "center",
            }}
          >
            {rowData.ProfitLoss}$
          </td>
        )}

        <td
          style={{
            background: "#00000000",
            color: "#fff",
            whiteSpace: "nowrap",
            fontSize: "12px",
            padding: "7px",
            paddingLeft: "0px",
            textAlign: "center",
          }}
        >
          {rowData.Size}
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 7);
    GetBotDate();

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    setActive(new Date(date) > sevenDaysAgo);

    if (new Date(date) > sevenDaysAgo) {
      updateCountdown(endDate);
    }

    return () => clearTimeout();
  }, [date]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const showError = parseFloat(inputValue) > value;
  const showError1 = parseFloat(inputValue) < 200;
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
              border: "3px solid #a443d2",
              background: "linear-gradient(to right, #33204b, #3b2063)",
              padding: "10px",
              margin: "10px",
              marginTop: "40px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  flex: 1,
                  marginLeft: "5px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                My Credit
              </span>
              <button
                style={{
                  width: "100px",
                  borderRadius: "30px",
                  backgroundColor: "#202020",
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: "bold",
                  padding: "3px",
                  border: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(to right, #cc44e2, #5d4162)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #a81dc3",
                }}
                onClick={() => {
                  window.location.href = "/Deposite";
                }}
              >
                Add more credits
              </button>
            </div>
            <h1
              style={{
                color: "#fff",
                marginTop: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              ${value}
            </h1>
          </div>

          <div
            style={{
              position: "relative",
              border: "1px solid #a443d2",
              background:
                "linear-gradient(to right, rgba(15, 10, 21, 0.8), rgba(30, 9, 64, 0.8))",
              padding: "10px",
              margin: "10px",
              marginTop: "40px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px",
              overflow: "hidden", // Ensure image doesn't overflow
            }}
          >
            <img
              src="./assets/mask.png"
              alt="Mask"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "150px",
                height: "100%",
                objectFit: "cover",
                opacity: 0.2, // Adjust image opacity here
              }}
            />
            <form
              action="#"
              class="Bot_form"
              id="SignUp_form"
              onSubmit={handleSubmit}
            >
              <h2
                style={{
                  margin: "10px",
                  marginTop: "0px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #654778, #8939af)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    zIndex: 10,
                  }}
                >
                  Enigma Ai{" "}
                </span>
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    marginRight: "0px",
                    fontSize: "11px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Amount to Invest:
                </span>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  style={{
                    border: "1px solid #a443d2",
                    marginLeft: "5px",
                    fontSize: "11px",
                    padding: "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    background: "#00000000",
                    borderRadius: "15px",
                    color: "#fff",
                  }}
                  value={inputValue}
                  onChange={handleChange}
                />
              </div>
              {showError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "11px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  Error: Input value exceeds the limit.
                </p>
              )}
              {showError1 && (
                <p
                  style={{
                    color: "red",
                    fontSize: "11px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  Error: Input value must greater than 200.
                </p>
              )}
              <p
                style={{
                  color: "#8f8f91",
                  fontSize: "11px",
                  textAlign: "center",
                  marginTop: "5px",
                  marginBottom: "0px",
                }}
              >
                Available credit : ${value}
              </p>
              {/* <p
                id="countdown"
                style={{
                  color: "#8f8f91",
                  fontSize: "11px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              ></p> */}

              <div style={{ display: "flex", justifyContent: "center" }}>
                {active ? (
                  <button
                    id="countdown"
                    style={{
                      width: "200px",
                      borderRadius: "30px",
                      backgroundColor: "#202020",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "none",
                      position: "relative",
                      overflow: "hidden",
                      backgroundImage:
                        "linear-gradient(to right, #581c62, #a23bb3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #83418d",
                      marginTop: "10px",
                    }}
                    disabled
                  ></button>
                ) : (
                  <button
                    id="countdown"
                    style={{
                      width: "200px",
                      borderRadius: "30px",
                      backgroundColor: "#202020",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "none",
                      position: "relative",
                      overflow: "hidden",
                      backgroundImage:
                        "linear-gradient(to right, #581c62, #a23bb3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #83418d",
                      marginTop: "10px",
                    }}
                  >
                    Launch the bot
                  </button>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {active ? (
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "11px",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Status:
                    <span style={{ color: "#0dee4c" }}> Active</span>
                  </p>
                ) : (
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "11px",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Status:
                    <span style={{ color: "#e40505" }}> Inactive</span>
                  </p>
                )}
              </div>
            </form>
          </div>

          <div
            style={{
              border: "1px solid #a443d2",
              background: "linear-gradient(to right, #0f0a15, #1e0940)",
              padding: "10px",
              margin: "10px",
              marginTop: "40px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px",
            }}
          >
            {value === 0 ? (
              <div
                style={{
                  paddingTop: "100px",
                  paddingBottom: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontWeight: "bold", color: "#fff", margin: "0" }}>
                  No trading going on
                </p>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{
                      flex: 1,
                      width: "50px",
                      maxWidth: "100px",
                      borderRadius: "30px",
                      backgroundColor: "#202020",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: "bold",
                      padding: "5px",
                      border: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#00000000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #fff",
                    }}
                  >
                    Position
                  </button>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "11px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    *All prices are in USD
                  </span>
                </div>

                <div class="table-responsive" style={{ marginTop: "20px" }}>
                  <table class="table">
                    <thead>
                      <tr
                        style={{
                          background: "#00000000",
                          color: "#818181",
                          padding: "0px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        <th
                          scope="col"
                          style={{
                            background: "#00000000",
                            color: "#818181",
                            whiteSpace: "nowrap",
                            padding: "10px",
                            paddingBottom: "0px",
                            fontSize: "12px",
                          }}
                        >
                          Assets
                        </th>
                        <th
                          scope="col"
                          style={{
                            background: "#00000000",
                            color: "#818181",
                            whiteSpace: "nowrap",
                            padding: "10px",
                            paddingLeft: "0px",
                            textAlign: "center",
                            paddingBottom: "0px",
                            fontSize: "12px",
                          }}
                        >
                          Entry Price
                        </th>
                        <th
                          scope="col"
                          style={{
                            background: "#00000000",
                            color: "#818181",
                            whiteSpace: "nowrap",
                            padding: "10px",
                            paddingLeft: "0px",
                            textAlign: "center",
                            paddingBottom: "0px",
                            fontSize: "12px",
                          }}
                        >
                          Profits/Loss
                        </th>
                        <th
                          scope="col"
                          style={{
                            background: "#00000000",
                            color: "#818181",
                            whiteSpace: "nowrap",
                            padding: "10px",
                            paddingLeft: "0px",
                            textAlign: "center",
                            paddingBottom: "0px",
                            fontSize: "12px",
                          }}
                        >
                          Size
                        </th>
                      </tr>
                    </thead>
                    <tbody>{renderRows()}</tbody>
                  </table>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <button
                      style={{
                        width: "30px",
                        borderRadius: "50%",
                        padding: "8px",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                      onClick={prevPage} // Assuming this should be previousPage instead of nextPage
                    >
                      <img
                        src="./assets/left-arrow.png" // Assuming this should be left-arrow.png instead of right-arrow.png
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                        alt=""
                      />
                    </button>
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Previous Page
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        marginRight: "10px",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Next Page
                    </span>
                    <button
                      style={{
                        width: "30px",
                        borderRadius: "50%",
                        padding: "8px",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                      }}
                      onClick={nextPage}
                    >
                      <img
                        src="./assets/right-arrow.png"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
