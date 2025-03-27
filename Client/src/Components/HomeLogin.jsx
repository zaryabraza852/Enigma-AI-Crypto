import React, { useState, useEffect, useRef } from "react";
import SideBar from "./SideBar";
import TimeAgo from "./TimeAgo";
import Cookies from "js-cookie";

const HomeLogin = () => {
  const [tableData, settableData] = useState([]);

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

  const tbodyRef = useRef(null);
  const containerRef = useRef(null);

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current && tbodyRef.current) {
        if (scrollDirection === "down") {
          containerRef.current.scrollTop += 1; // Scroll down by 1 pixel
          if (
            containerRef.current.scrollTop ===
            tbodyRef.current.scrollHeight - containerRef.current.clientHeight
          ) {
            setScrollDirection("up"); // Change direction when reached the bottom
          }
        } else {
          containerRef.current.scrollTop -= 1; // Scroll up by 1 pixel
          if (containerRef.current.scrollTop === 0) {
            setScrollDirection("down"); // Change direction when reached the top
          }
        }
      }
    }, 50); // Adjust scrolling speed as needed (smaller interval means faster scrolling)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [scrollDirection]);

  async function GetLatestWithdrawals() {
    await fetch(`${process.env.REACT_APP_URI}/GetLatestWithdrawals`, {
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
        settableData(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      GetLatestWithdrawals();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #11002f)",
        // overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
      }}
    >
      <SideBar />
      <div class="row" style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div
          class="col-lg-8 col-md-6 mx-auto text-left"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #303030, #3b304e)",
            borderRadius: "0px",
            margin: "10px",
            padding: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <p
            style={{
              color: "#fff",
              // marginLeft: "15px",
              fontSize: "11px",
              fontWeight: "bold",
              paddingBottom: "5px",
              borderBottom: "1px solid #000",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #ff0099, #c2bbc9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
              }}
            >
              Introducing ENIGMA: Revolutionizing Trading Al{" "}
            </span>
          </p>
          <p
            style={{
              fontSize: "13px",
              // marginLeft: "15px",
              fontWeight: "bold",
              marginTop: "-10px",
              color: "#fff",
              marginBottom: "0px",
            }}
          >
            ENIGMA is the future Of trading. Powered by advanced machine
            learning, it predicts market trends with unmatched accuracy. With
            lightning- fast decision-making and sophisticated risk management,
            ENIGMA consistently outperforms, maximizing returns and minimizing
            risks. Experience the revolution with ENIGMA.
          </p>
        </div>
      </div>

      <div
        class="row"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <div
          class="col-lg-8 col-md-6 mx-auto text-left"
          style={{
            margin: "10px",
          }}
        >
          <div class="row">
            <div class="col-lg-4 col-md-6 mx-auto text-left">
              <div
                onClick={() => {
                  window.location.href = "/Deposite";
                }}
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "#202020",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(to right, #ac4495, #321340)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  height: "90px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    width: "98%",
                    height: "94%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "5px",
                    zIndex: 10,
                    background: "#202020",
                    pointerEvents: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginLeft: "20px", height: "70px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="./assets/folder.png"
                        style={{ width: "20px", height: "auto" }}
                        alt=""
                      />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          marginLeft: "5px",
                        }}
                      >
                        Balance
                      </span>
                    </div>
                    <button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        backgroundColor: "#202020",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage:
                          "linear-gradient(to right, #2f134b, #9937d6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        window.location.href = "/Deposite";
                      }}
                    >
                      Deposit
                    </button>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "85px",
                      backgroundImage: "url('./assets/bitcoin.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "rotate(340deg)",
                    }}
                  >
                    {console.log(data)}
                    {data.map((rowData, index) => (
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          marginLeft: "20px",
                          transform: "rotate(20deg)",
                          marginRight: "20px",
                        }}
                      >
                        {rowData.BotCredit}$
                      </p>
                    ))}
                  </div>
                </span>
                ;
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 mx-auto text-left
            "
            >
              <div
                onClick={() => {
                  window.location.href = "/Withdraw";
                }}
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "#202020",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(to right, #ac4495, #321340)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  height: "90px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "98%",
                    height: "94%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "5px",
                    zIndex: 10,
                    background: "#202020",
                    pointerEvents: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginLeft: "20px", height: "70px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="./assets/chart.png"
                        style={{ width: "20px", height: "auto" }}
                        alt=""
                      />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          marginLeft: "5px",
                        }}
                      >
                        Statistics
                      </span>
                    </div>
                    <button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        backgroundColor: "#202020",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage:
                          "linear-gradient(to right, #2f134b, #9937d6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      View Stat
                    </button>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "80px",
                      backgroundImage: "url('./assets/bitcoin.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "rotate(340deg)",
                    }}
                  ></div>
                </div>
                ;
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mx-auto text-left">
              <div
                onClick={() => {
                  window.location.href = "/Bot";
                }}
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage:
                    "linear-gradient(to right, #ac4495, #321340)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  height: "90px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "98%",
                    height: "94%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "5px",
                    zIndex: 10,
                    background: "#202020",
                    pointerEvents: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginLeft: "20px", height: "70px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="./assets/bot.png"
                        style={{ width: "20px", height: "auto" }}
                        alt=""
                      />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          marginLeft: "5px",
                        }}
                      >
                        Bot
                      </span>
                    </div>
                    <button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        backgroundColor: "#202020",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "5px",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage:
                          "linear-gradient(to right, #2f134b, #9937d6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                        zIndex: "10",
                      }}
                      onClick={() => {
                        window.location.href = "/Bot";
                      }}
                    >
                      Start
                    </button>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "80px",
                      backgroundImage: "url('./assets/bitcoin.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "rotate(340deg)",
                    }}
                  ></div>
                </div>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          paddingBottom: "100px",
        }}
      >
        <div
          class="col-lg-8 col-md-6 mx-auto text-left"
          style={{
            margin: "10px",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #a629d1, #ad1aba)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              Latest Withdraws{" "}
            </span>
          </h3>

          <div
            class="table-responsive"
            style={{
              maxHeight: "200px",
              overflowY: "auto",
            }}
            ref={containerRef}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                overflowX: "auto",
                tableLayout: "fixed",
              }}
              ref={tbodyRef}
            >
              <thead style={{ position: "sticky", top: "0", zIndex: "1" }}>
                <tr
                  style={{
                    background: "linear-gradient(to right, #210c2e, #270b49)",
                    color: "#fff",
                    textAlign: "center",
                    marginLeft: "1px",
                    marginRight: "1px",
                  }}
                >
                  <td
                    style={{
                      width: "27%", // Equal width for each td
                      background: "linear-gradient(to right, #210c2e, #210c37)",
                      padding: "5px",
                      borderRight: "1px solid #47474c",
                    }}
                  >
                    User
                  </td>
                  <td
                    style={{
                      width: "27%", // Equal width for each td
                      background: "linear-gradient(to right, #210c37, #1f0b3e)",
                      padding: "5px",
                      borderRight: "1px solid #47474c",
                      textAlign: "center",
                    }}
                  >
                    Amount
                  </td>
                  <td
                    style={{
                      width: "34%", // Equal width for each td
                      background: "linear-gradient(to right, #1f0b3e, #270b49)",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Time
                  </td>
                </tr>
              </thead>

              <tbody>
                {tableData.map((rowData, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #47474c",
                      width: "100%",
                    }}
                  >
                    <td
                      style={{
                        width: "33%",
                        padding: "10px",
                        textAlign: "center",
                        color: "#fff",
                        background: "#00000000",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                      }}
                    >
                      {rowData.Username}
                    </td>
                    <td
                      style={{
                        width: "33%",
                        padding: "10px",
                        textAlign: "center",
                        color: "#fff",
                        background: "#00000000",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                      }}
                    >
                      ${rowData.Amount}
                    </td>
                    <td
                      style={{
                        width: "33%",
                        padding: "10px",
                        textAlign: "center",
                        color: "#fff",
                        background: "#00000000",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                      }}
                    >
                      1 day ago
                      {/* <TimeAgo timestamp={rowData.CreatedAt} /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
