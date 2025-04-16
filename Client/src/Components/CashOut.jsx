import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";

const CashOut = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    image: "./assets/bitcoin1.png",
    text: "BTC",
  });
  const [Amount, setAmount] = useState("");
  const [CashoutCredit, setCashoutCredit] = useState(0);
  const [Address, setAddress] = useState("");
  const items = [
    { image: "./assets/bitcoin1.png", text: "BTC" },
    { image: "./assets/ethereum.png", text: "Ethereum" },
  ];
  const [data, setdata] = useState([]);

  const [dat, setDat] = useState([]);

  async function GetUserData() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetUserData?Email=${Cookies.get("email")}`,
      {
        method: "GET",
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
          Authorization: `Bearer ${Cookies.get("token")}`,
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
        setDat(data.data);
        setCashoutCredit(data.data[0].CashoutCredit);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetUserData();
  }, []);

  async function GetWithdrawHistory() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetWithdrawHistory?Email=${Cookies.get(
        "email"
      )}`,
      {
        method: "GET",
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
          Authorization: `Bearer ${Cookies.get("token")}`,
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
        setdata(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetWithdrawHistory();
    GetUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("done");

    const form = e.target;

    // Validation checks
    if (parseFloat(Amount) > CashoutCredit) {
      alert("Error: Withdrawal amount cannot exceed available credit.");
      return;
    }

    if (parseFloat(Amount) < 200) {
      alert("Error: Minimum Withdrawal limit is 200");
      return;
    }

    if (
      !/^[a-zA-Z0-9]{26,999999999999999999999999999999999999}$/.test(Address)
    ) {
      alert("Error: Invalid withdrawal address.");
      return; // Stop further execution
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI}/Withdraw?Email=${Cookies.get(
          "email"
        )}&Currency=${selectedItem.text}&Amount=${Amount}&Address=${Address}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      setAddress("");
      setAmount("");
      alert("Withdraw Successfully");
      GetWithdrawHistory();
      GetUserData();
    } catch (error) {
      alert("Error:", error.message);
      console.log(error.message);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #0f002a)",
        overflow: "hidden",
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
          <h1
            style={{
              fontSize: "36px",
              margin: "30px",
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #483951, #8939af)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
              }}
            >
              {t("withdraw")}{" "}
            </span>
          </h1>

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
              <h6
                style={{
                  flex: 1,
                  color: "#fff",
                  //   fontSize: "11px",
                  fontWeight: "bold",
                  border: "none",
                  position: "relative",
                  marginTop: "2px",
                }}
              >
                {t("myCredit")}
              </h6>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                #4534534234:USER1
              </span>
            </div>
            {dat.map((rowData, index) => (
              <h1 style={{ color: "#fff", marginTop: "10px" }}>
                ${rowData.CashoutCredit}
              </h1>
            ))}
            <form
              action="#"
              class="contact_form"
              id="Withdraw_form"
              onSubmit={handleSubmit}
            >
              <div
                className="combo-box"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "90%",
                  marginTop: "20px",
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
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
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
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
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
                          {t("currency.btc")}
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
                        onClick={() => handleItemClick(item)}
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
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
                        <span
                          style={{ verticalAlign: "middle", color: "#fff" }}
                        >
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
                  margin: "0px",
                  marginTop: "20px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                {" "}
                {t("amountToWithdraw")}
              </p>
              <input
                type="text"
                placeholder="0.000000"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "80%",
                  background: "#65656b",
                  paddingLeft: "10px",
                  margin: "0px",
                  color: "#fff",
                }}
                value={Amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />

              <p
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  margin: "0px",
                  marginTop: "5px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                {" "}
                {t("withdrawTo")}
              </p>
              <input
                type="text"
                placeholder={
                  selectedItem.text === "BTC"
                    ? t("enterBTCAddress")
                    : t("enterETHAddress")
                }
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "80%",
                  background: "#65656b",
                  paddingLeft: "10px",
                  margin: "0px",
                  color: "#fff",
                }}
                value={Address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    width: "160px",
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
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  {t("withdraw")}
                </button>
              </div>
            </form>
          </div>

          <div
            style={{
              border: "3px solid #a443d2",
              background: "linear-gradient(to right, #33204b, #3b2063)",
              padding: "10px",
              margin: "10px",
              marginTop: "40px",
              borderRadius: "10px",
              minHeight: "350px",
            }}
          >
            <h5
              style={{ color: "#fff", textAlign: "center", marginTop: "10px" }}
            >
              {t("withdrawHistory")}
            </h5>

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
                      }}
                    >
                      {t("withdrawId")}
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
                      }}
                    >
                      {t("latest_withdrawals.amount")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr style={{ borderBottom: "0px solid #00000000" }}>
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
                        #{item.Id}
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
                        {item.Amount} USD
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOut;
