import React from "react";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
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
      <SideBar />
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
          {t("welcome")}{" "}
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
          {t("to_the_future")}{" "}
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
          {t("of_trading")}
        </span>
      </h1>

      <h6
        style={{
          color: "#8f8f8f",
          fontSize: "13px",
          marginLeft: "15px",
          marginRight: "20px",
        }}
      >
        {t("wait_cost")}{" "}
        <span style={{ color: "#fff" }}> {t("cost_money")}...</span>{" "}
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
              onClick={() => {
                window.location.href = "/SignUp";
              }}
            >
              {t("get_started")}
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
                {t("get_started")}
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
              onClick={() => {
                window.location.href = "https://t.me/realrichsociety";
              }}
            >
              {t("telegram_channel")}
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
          <div
            class="col-lg-11 col-md-6 mx-auto text-center"
            style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
          >
            <h3 style={{ color: "#fff" }}>
              {t("what_is")}{" "}
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
                {t("enigma_ai")}{" "}
              </span>
            </h3>
          </div>
        </div>
        <div
          class="row"
          style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
        >
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
              {t("enigma_description")}
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
              <div
                class="col-lg-3 col-md-6 mx-auto text-left"
                style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
              >
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
                        src="./assets/search.png"
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
                      {t("gem_finder")}
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
                        {t("gem_finder_description")}{" "}
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
                        {t("gem_finder_description_1")}{" "}
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
                        {t("gem_finder_description_2")}{" "}
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
                        {t("to_buy")}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 mx-auto text-left"
                style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
              >
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
                        src="./assets/chart.png"
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
                      {t("advanced_charts")}
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
                        {t("advanced_charts_description")}{" "}
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
                        {t("advanced_charts_description_1")}{" "}
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
                        {t("advanced_charts_description_2")}{" "}
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
                        {t("advanced_charts_description_3")}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 mx-auto text-left"
                style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
              >
                <div class="row">
                  <div
                    class="col-lg-11 col-md-6 mx-auto text-left"
                    style={{
                      height: "240px",
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      margin: "1px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15px",
                        marginTop: "12px",
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
                        src="./assets/setting.png"
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
                      {t("automated_trading")}
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
                        {t("automated_trading_description")}{" "}
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
                        {t("automated_trading_description_1")}{" "}
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
                        {t("automated_trading_description_2")}{" "}
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
                        {t("automated_trading_description_3")}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 col-md-6 mx-auto text-left"
                style={{ animation: "myAnim 3s linear 0s 1 normal forwards" }}
              >
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
                        src="./assets/support.png"
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
                      {t("support_team")}
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
                        {t("support_team_description")}{" "}
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
                        {t("support_team_description_1")}{" "}
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
                        {t("support_team_description_2")}{" "}
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
          className="row"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div className="col-lg-11 col-md-10 col-sm-12 mx-auto text-left">
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
                animation: "myAnim 3s linear 0s 1 normal forwards",
              }}
            >
              {t("how_to_get_started")}
            </h1>

            <div className="row">
              {[1, 2, 3].map((step, index) => (
                <div
                  key={step}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  style={{
                    animation: "myAnim 3s linear 0s 1 normal forwards",
                  }}
                >
                  <div
                    className="w-100 h-100"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #262630, #28263d)",
                      borderRadius: "40px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
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
                          marginTop: "3px",
                        }}
                      >
                        {step}
                      </h1>
                    </div>

                    <p
                      style={{
                        color: "#fff",
                        fontSize: "22px",
                        fontWeight: "bold",
                        marginTop: "15px",
                      }}
                    >
                      {step === 1
                        ? t("create_account")
                        : step === 2
                        ? t("make_deposit")
                        : t("start_earning")}
                    </p>

                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginTop: "10px",
                        color: "#d1d1d4",
                      }}
                    >
                      {step === 1
                        ? t("creat_account_description")
                        : step === 2
                        ? t("make_deposit_description")
                        : t("start_earning_description")}
                    </p>
                  </div>
                </div>
              ))}
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
            marginBottom: "50px",
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
              onClick={() => {
                window.location.href = "/SignUp";
              }}
            >
              {t("get_started")}
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
                {t("get_started")}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
