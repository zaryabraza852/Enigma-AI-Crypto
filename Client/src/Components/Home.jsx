import React from "react";
import SideBar from "./SideBar";
const Home = () => {
  
  return (
    <div
      style={{
        background: "linear-gradient(to right, #00000a, #04001c)",
        // display: 'flex',
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
      }}
    >
        <SideBar/>
      <h1
        style={{
          fontSize: "36px",
          margin: "30px",
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #9072cf, #b9acd6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            zIndex: 10,
          }}
        >
          Welcome{" "}
        </span>
        {/* <br /> */}
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #9072cf, #b9acd6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            zIndex: 10,
          }}
        >
          To The Future{" "}
        </span>
        {/* <br /> */}
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #9072cf, #b9acd6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            zIndex: 10,
          }}
        >
          Of Trading
        </span>
      </h1>

      <h6
        style={{
          color: "#8f8f8f",
          fontSize: "13px",
          marginLeft:'15px',
          marginRight: "20px",
        }}
      >
        every seconds you wait{" "}
        <span style={{ color: "#fff" }}> it costing you money...</span>{" "}
      </h6>

      <section>
        <div
          class="row"
          style={{
            margin: "20px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div class="col-lg-2 col-md-6 mx-auto text-left"></div>
          <div class="col-lg-3 col-md-6 mx-auto text-left">
            <button
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
              onClick={()=>{window.location.href='/SignUp'}}
            >
              Get Started
              <span
                style={{
                  position: "absolute",
                  width: "99%",
                  height: "93%",
                  top: "50%",
                  left: "50%",
                  padding: "10px",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "30px",
                  zIndex: 10,
                  background: "#202020",
                  pointerEvents: "none", // Make sure the span doesn't interfere with button clicks
                }}
              >
                Get Started
              </span>
            </button>
          </div>
          <div class="col-lg-2 col-md-6 mx-auto text-left"></div>
          <div class="col-lg-3 col-md-6 mx-auto text-left">
            <button
              style={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "#202020",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px",
                border: "none",
                background: "#202020",
                marginTop: "20px",
              }}
              onClick={()=>{window.location.href='https://t.me/realrichsociety'}}
            >
              Telegram canal
            </button>
          </div>
          <div class="col-lg-2 col-md-6 mx-auto text-left"></div>
        </div>
      </section>

      <section>
        <div
          class="row"
          style={{ marginLeft: "10px", marginRight: "10px", marginTop: "30px" }}
        >
          <div class="col-lg-8 col-md-6 mx-auto text-left">
            <img
              src="./assets/Animation.gif"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div
          class="row"
          style={{ marginLeft: "90px", marginRight: "90px", marginTop: "20px" }}
        >
          <div class="col-lg-11 col-md-6 mx-auto text-center" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
            <h3 style={{ color: "#fff" }} >
              What is{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #5e4372, #8939af)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                Enigma Ai{" "}
              </span>
            </h3>
          </div>
        </div>
        <div class="row" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
          <div class="col-lg-8 col-md-6 mx-auto text-center">
            <p
              style={{
                marginLeft: "30px",
                fontSize: "14px",
                fontWeight: "bold",
                alignContent: "center",
                marginRight: "30px",
                color: "#d3d3d3",
                textAlign: "left",
              }}
            >
              This revolutionary trading AI transcends expectations by
              harnessing big data for informed decisions and unparalleled
              precision in transactions thereby redefining the standards of
              financial excellence.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          class="row"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div class="col-lg-11 col-md-6 mx-auto text-left">
            <div class="row">
              <div class="col-lg-3 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "220px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15px",
                        marginTop: "15px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./Assets/search.png"
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                    <p
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Gem Finder
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "15px",
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        Our Al examines the market 24/7 and{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        determines, with the help of our cutting-{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        edge algorithm, the best crypto gems to{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        buy{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "220px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15px",
                        marginTop: "15px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./Assets/chart.png"
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                    <p
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Advanced Charts Analysis
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "15px",
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        Our algorithm calculates market{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        movements and utilizes advanced{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        predictive models to anticipate the best{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        possible strategy{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "220px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",

                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15px",
                        marginTop: "15px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./Assets/setting.png"
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                    <p
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Fully automated trading system
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "15px",
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        The fully automated trading system,{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        powered by Al, simplifies and accelerates{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        the trading process by eliminating the{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        need for human intervention{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mx-auto text-left"style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "220px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15px",
                        marginTop: "15px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="./Assets/support.png"
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                    <p
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Full support team 24/7
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "15px",
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        Our team is available 24 hours a day to{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        guide you and answer any questions you{" "}
                      </span>
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #aa65c6, #c8a7d4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          zIndex: 10,
                        }}
                      >
                        may have{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          class="row"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div class="col-lg-11 col-md-6 mx-auto text-left">
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
                animation: "myAnim 3s linear 0s 1 normal forwards" 
              }}
            >
              How To Get Started
            </h1>
            <div class="row">
              <div class="col-lg-4 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "250px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft:'15px',
                        marginTop: "30px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <h1
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginRight: "3px",
                          marginTop: "3px",
                        }}
                      >
                        1
                      </h1>
                    </div>

                    <p
                      style={{
                        color: "#fff",
                        marginLeft:'15px',
                        fontSize: "26px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Create an account
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft:'15px',
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                        color: "#d1d1d4",
                        fontSize: "20px",
                        marginRight: "20px",
                      }}
                    >
                      Create an account on our platform to access our trading
                      bot and tools
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "250px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft:'15px',
                        marginTop: "30px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <h1
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginRight: "3px",
                          marginTop: "3px",
                        }}
                      >
                        2
                      </h1>
                    </div>

                    <p
                      style={{
                        color: "#fff",
                        marginLeft:'15px',
                        fontSize: "26px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Make a deposit
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft:'15px',
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                        color: "#d1d1d4",
                        fontSize: "20px",
                        marginRight: "20px",
                      }}
                    >
                      Make your first deposit to start trading
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mx-auto text-left" style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}>
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "250px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft:'15px',
                        marginTop: "30px",
                        backgroundImage:
                          "linear-gradient(to right, #373740, #373741)",
                        borderRadius: "15px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <h1
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginRight: "3px",
                          marginTop: "3px",
                        }}
                      >
                        3
                      </h1>
                    </div>

                    <p
                      style={{
                        color: "#fff",
                        marginLeft:'15px',
                        fontSize: "26px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      Start Earning
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft:'15px',
                        fontWeight: "bold",
                        marginBottom: "25px",
                        marginTop: "-10px",
                        color: "#d1d1d4",
                        fontSize: "20px",
                        marginRight: "20px",
                      }}
                    >
                      Relax and let our bot do all the work for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          class="row"
          style={{
            margin: "20px",
            marginTop: "10px",
            marginBottom:'50px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div class="col-lg-3 col-md-6 mx-auto text-left">
            <button
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
              onClick={()=>{window.location.href='/SignUp'}}
            >
              Get Started
              <span
                style={{
                  position: "absolute",
                  width: "99%",
                  height: "93%",
                  top: "50%",
                  left: "50%",
                  padding: "10px",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "30px",
                  zIndex: 10,
                  background: "#202020",
                  pointerEvents: "none", // Make sure the span doesn't interfere with button clicks
                }}
              >
                Get Started
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
