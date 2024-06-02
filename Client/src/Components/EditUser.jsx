import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const EditUser = () => {
  const [Assets, setAssets] = useState("");
  const [EntryPoint, setEntryPoint] = useState("");
  const [ProfitLoose, setProfitLoose] = useState("");
  const [Size, setSize] = useState("");
  const [items, setItems] = useState([]);

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Balance, setBalance] = useState("");
  const [ProfitP, setProfitP] = useState("");
  const [ProfitR, setProfitR] = useState("");
  const [StatBalance, setStatBalance] = useState("");
  const [BotCredit, setBotCredit] = useState("");
  const [CashoutCredit, setCashoutCredit] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log('helllo')
    const formData = new FormData(form);
    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_URI
        }/AddPositions?Assets=${Assets}&ProfitLoose=${ProfitLoose}&EntryPoint=${EntryPoint}&Size=${Size}&UserId=${Cookies.get(
          "UserId"
        )}`,
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
        // alert("EMAIL ALREADY EXISTS");
      } else {
        // form.reset();
        alert("Bot Added Successfully");
        setAssets("");
        setProfitLoose("");
        setEntryPoint("");
        setSize("");
        GetPositions();
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const UpdateBalance = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_URI
        }/UpdateBalance?Balance=${BotCredit}&ProfitP=${ProfitP}&ProfitR=${ProfitR}&BotCredit=${BotCredit}&CashoutCredit=${CashoutCredit}&StatBalance=${StatBalance}&UserId=${Cookies.get(
          "UserId"
        )}`,
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
        // alert("EMAIL ALREADY EXISTS");
      } else {
        form.reset();
        alert("Updated Successfully");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  async function handleDelete(Id) {
    if (window.confirm("Are you sure you want to delete the Position?")) {
      await fetch(`${process.env.REACT_APP_URI}/DeletePosition?Id=${Id}`, {
        method: "DELETE",
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
          if (data.message == "deleted") {
            GetPositions();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  async function GetPositions() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetPositions?UserId=${Cookies.get("UserId")}`,
      {
        method: "GET",
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
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
        setItems(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function GetBalance() {
    await fetch(
      `${process.env.REACT_APP_URI}/GetBalance?UserId=${Cookies.get("UserId")}`,
      {
        method: "GET",
        headers: {
          "api-key": process.env.REACT_APP_API_KEY,
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
        // setItems(data.data);
        setUsername(data.data[0].Username);
        setEmail(data.data[0].Email);
        setPassword(data.data[0].Password);
        setBalance(data.data[0].BotCredit);
        setProfitP(data.data[0].ProfitP);
        setProfitR(data.data[0].ProfitR);
        setStatBalance(data.data[0].StatBalance);
        setBotCredit(data.data[0].BotCredit);
        setCashoutCredit(data.data[0].CashoutCredit);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetPositions();
    GetBalance();
  }, []);

  const textBoxStyle = {
    backgroundColor: "#7c7c7c",
    borderRadius: "30px",
    padding: "5px",
    paddingLeft: "20px",
    border: "none",
    color: "white",
    width: "100%",
  };

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

      <h1 style={{ color: "#fff", marginTop: "20px" }}> Admin Panel</h1>

      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginTop: "20px",
          marginRight: "0px",
          paddingBottom: "20px",
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
            <form
              action="#"
              class="Bot_form"
              id="SignUp_form"
              onSubmit={UpdateBalance}
            >
            <div class="table-responsive" style={{ marginTop: "20px" }}>
              <table class="table">
                <tbody>
                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Username:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      {Username}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Email:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      {Email}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Home Balance:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={BotCredit}
                        onChange={(e) => {
                          setBotCredit(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Profit Rates %:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={ProfitP}
                        onChange={(e) => {
                          setProfitP(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Profit Rates $:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={ProfitR}
                        onChange={(e) => {
                          setProfitR(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Bot Credit:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={BotCredit}
                        onChange={(e) => {
                          setBotCredit(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Cashout Credit:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={CashoutCredit}
                        onChange={(e) => {
                          setCashoutCredit(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      Stat Balance:
                    </td>
                    <td
                      style={{
                        background: "#00000000",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "15px",
                        fontWeight: "bold",
                        padding: "7px",
                        paddingLeft: "0px",
                        textAlign: "center",
                        border: "0px solid #00000000",
                      }}
                    >
                      <input
                        type="text"
                        style={textBoxStyle}
                        value={StatBalance}
                        onChange={(e) => {
                          setStatBalance(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="row"
              style={{
                marginLeft: "0px",
                marginRight: "0px",
                paddingBottom: "40px",
              }}
            >
              <div class="col-lg-4 col-md-3 col-sm-3 mx-auto text-left">
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
                  onClick={() => {}}
                >
                  Update
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginTop: "0px",
          marginRight: "0px",
          paddingBottom: "20px",
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
            <form
              action="#"
              class="Bot_form"
              id="SignUp_form"
              onSubmit={handleSubmit}
            >
              <div class="table-responsive" style={{ marginTop: "20px" }}>
                <table class="table">
                  <tbody>
                    <tr>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        Assets:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        <input
                          type="text"
                          style={textBoxStyle}
                          value={Assets}
                          onChange={(e) => {
                            setAssets(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        Entry Price:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        <input
                          type="text"
                          style={textBoxStyle}
                          value={EntryPoint}
                          onChange={(e) => {
                            setEntryPoint(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        Profit Loose:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        <input
                          type="text"
                          style={textBoxStyle}
                          value={ProfitLoose}
                          onChange={(e) => {
                            setProfitLoose(e.target.value);
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        Size:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        <input
                          type="text"
                          style={textBoxStyle}
                          value={Size}
                          onChange={(e) => {
                            setSize(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="row"
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  paddingBottom: "40px",
                }}
              >
                <div class="col-lg-4 col-md-3 col-sm-3 mx-auto text-left">
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
                        "linear-gradient(to right, #9e00ff, #9e00ff)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                    type="submit"
                    
                  >
                    Add Bot
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="row"
        style={{
          marginLeft: "0px",
          marginTop: "0px",
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
            <h4
              style={{ color: "#fff", marginTop: "20px", textAlign: "center" }}
            >
              Bot Positions
            </h4>
            <div class="table-responsive" style={{ marginTop: "20px" }}>
              <table class="table">
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        Position{item.Position}:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
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
                            maxWidth: "100%",
                            padding: "5px",
                            border: "none",
                            position: "relative",
                            overflow: "hidden",
                            backgroundImage:
                              "linear-gradient(to right, #ff0000, #ff0000)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            handleDelete(item.Id);
                          }}
                        >
                          Delete
                        </button>
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

export default EditUser;
