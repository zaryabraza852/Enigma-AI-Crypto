/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import QRCode from "qrcode.react";

const Deposite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ image: "./assets/bitcoin1.png", text: "BTC" });
  const items = [
    { image: "./assets/bitcoin1.png", text: "BTC" },
    { image: "./assets/ethereum.png", text: "Ethereum" },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  
  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);


  // const value = "https://example.com";

  const [Ethereum, setEthereum] = useState("");
  const [BTC, setBTC] = useState("");
  const [IsBTC, setIsBTC] = useState(true);

  async function GetCoin() {
    await fetch(`${process.env.REACT_APP_URI}/GetCoin`, {
      method: "GET",
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
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
        background: "linear-gradient(to right, #00000a, #04001c)",
        // display: 'flex',
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
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
          <h6
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #c628b7, #df97d8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              The minimum deposit is $200 USD{" "}
            </span>
          </h6>

          <div
            style={{
              border: "1px solid #5d5d5e",
              background: "linear-gradient(to right, #171717, #201732)",
              padding: "20px",
              margin: "10px",
            }}
          >
            <div
              className="combo-box"
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  cursor: "pointer",
                  background: "#65656b",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                {selectedItem ? (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        src={selectedItem.image}
                        alt=""
                        style={{
                          marginRight: "10px",
                          width: "30px",
                          height: "30px",
                          verticalAlign: "middle",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          verticalAlign: "left",
                          color: "#fff",
                          display: "inline-block",
                        }}
                      >
                        {selectedItem.text}
                      </span>
                    </div>
                    <img
                      src={"./assets/downarrow.png"}
                      alt=""
                      style={{
                        marginTop: "5px",
                        width: "20px",
                        height: "20px",
                        verticalAlign: "middle",
                        display: "inline-block",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        src={"./assets/bitcoin1.png"}
                        alt=""
                        style={{
                          marginRight: "10px",
                          width: "30px",
                          height: "30px",
                          verticalAlign: "middle",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          verticalAlign: "left",
                          color: "#fff",
                          display: "inline-block",
                        }}
                      >
                        BTC
                      </span>
                    </div>
                    <img
                      src={"./assets/downarrow.png"}
                      alt=""
                      style={{
                        marginTop: "5px",
                        width: "20px",
                        height: "20px",
                        verticalAlign: "middle",
                        display: "inline-block",
                      }}
                    />
                  </div>
                )}
              </div>
              {isOpen && (
                <div
                  className="dropdown-content"
                  style={{
                    display: "block",
                    position: "absolute",
                    background: "#1b1a29",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    zIndex: "1",
                  }}
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        handleItemClick(item);
                        if (item.text === "BTC") {
                          setIsBTC(true);
                        } else {
                          setIsBTC(false);
                        }
                      }}
                      style={{
                        cursor: "pointer",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {console.log(item.image)}
                      <img
                        src={item.image}
                        alt="Item"
                        style={{
                          marginRight: "10px",
                          width: "30px",
                          height: "30px",
                          verticalAlign: "middle",
                        }}
                      />
                      <span style={{ verticalAlign: "middle", color: "#fff" }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Your {selectedItem.text} deposit address
            </p>
            <div style={{ textAlign: "center" }}>
            <a
                style={{
                    background: "#65656b",
                    padding: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                    marginBottom: "10px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    color: "#fff",
                    display: "inline-block",
                    fontSize: "13px",
                    marginRight: '10px',
                    textDecoration: "none", // added to remove underline
                    width: windowWidth > 1024 ? "300px" : "200px", // Adjust width based on screen width
                    overflowWrap: "break-word", // allow text to break onto next line if necessary
                    textAlign: "center" // center the text horizontally
                }}
                // href={IsBTC ? BTC : Ethereum}
            >
                {IsBTC ? BTC : Ethereum}
            </a>
        </div>





            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "150px",
              }}
            >
              {/* <p style={{ fontSize: "12px", margin: "0px" }}>Frame 1</p> */}
            </div>

            <div
              style={{
                padding: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "5px",
                background: "#fff",
                width: "150px",
                border: "1px solid #909093",
              }}
            >
              {IsBTC ? <QRCode value={BTC} /> : <QRCode value={Ethereum} />}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  color: "#a1a0a3",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  fontWeight: "bold",
                  paddingBottom: "50px",
                }}
              >
                Only send BTC/Ethereum to this address, deposit can take up to
                12hr to show up
              </p>
            </div>
          </div>

          <h6
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #c628b7, #df97d8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              Instructions{" "}
            </span>
          </h6>

          <div
            style={{
              border: "1px solid #5d5d5e",
              background: "linear-gradient(to right, #262626, #31264b)",
              padding: "10px",
              margin: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  minWidth: "50px",
                  borderRadius: "25px",
                  background: "#7f7f83",
                  color: "#fff",
                  alignContent: "center",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <span
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Send the payment to the address below
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  minWidth: "50px",
                  borderRadius: "25px",
                  background: "#7f7f83",
                  color: "#fff",
                  alignContent: "center",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <span
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Take a screenshot of the transaction and send it to @realenigma on
                Telegram
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  minWidth: "50px",
                  borderRadius: "25px",
                  background: "#7f7f83",
                  color: "#fff",
                  alignContent: "center",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <span
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Wait for the funds to be credited to your account
              </span>
            </div>
          </div>

          <h6
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #c628b7, #df97d8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              Telegram Link{" "}
            </span>
          </h6>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                minWidth: "50px",
                borderRadius: "25px",
                background: "#c731ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                window.location.href = "https://t.me/realrichsociety";
              }}
            >
              <img
                src="./assets/telegram.png"
                style={{ width: "25px", height: "auto", marginRight: "3px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposite;
