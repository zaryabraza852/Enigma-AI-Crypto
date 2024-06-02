import React, { useEffect, useState } from "react";
import FormattedDate from "./FormattedDate";
import TimeAgo from "./TimeAgo1";
import Cookies from "js-cookie";
import moment from "moment";

const UsersList = () => {
  const isWithinLast7Days = (timestamp) => {
    // Get the current date
    const currentDate = moment();

    // Get the date 7 days ago
    const sevenDaysAgo = moment().subtract(7, "days");

    // Convert timestamp to a moment object
    const timestampMoment = moment(timestamp);

    // Check if timestamp falls within the last 7 days
    return timestampMoment.isBetween(sevenDaysAgo, currentDate);
  };

  const searchIconStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    width: "20px",
    height: "20px",
    color: "#fff",
  };

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete the Account?")) {
      await fetch(`${process.env.REACT_APP_URI}/DeleteBot?Id=${id}`, {
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
            GetAllBots();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  const containerStyle = {
    position: "relative",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255, 255, 255, 0)",
    border: "1px solid #fff",
    borderRadius: "30px",
    padding: "5px",
    paddingLeft: "45px",
  };
  const [items, setitems] = useState([]);
  const [data, setdata] = useState([]);

  async function GetAllBots() {
    await fetch(`${process.env.REACT_APP_URI}/GetAllBots`, {
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
        setitems(data.data);
        setDate(data.data[0].CreatedAt);
        setdata(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const [date, setDate] = useState("");

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

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // Update every second
    setTimeout(() => updateCountdown(endDate), 1);
  }

  useEffect(() => {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 7);
    GetAllBots();

    const sevenDaysAgo = new Date();

    if (new Date(date) > sevenDaysAgo) {
      updateCountdown(endDate);
    }

    return () => clearTimeout();
  }, [date]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Filter items based on the input value
    const filteredData = data.filter((item) =>
      item.Username.toLowerCase().includes(inputValue.toLowerCase())
    );
    // Update the data state with filtered data
    setitems(filteredData);
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
          paddingBottom: "100px",
        }}
      >
        <div
          class="col-lg-8 col-md-6 mx-auto text-left"
          style={{
            margin: "10px",
          }}
        >
          <div style={containerStyle}>
            <input
              type="text"
              placeholder="Search..."
              style={inputStyle}
              onChange={handleInputChange}
            />
            <div style={searchIconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
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
              <div class="table-responsive" style={{ marginTop: "20px" }}>
                <table class="table">
                  <tbody>
                    <tr>
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
                        Username:
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
                        {item.Username}
                      </td>
                    </tr>

                    <tr>
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
                        Bot Status:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: item.Amount === null
                            ? "red"
                            : "green",
                          whiteSpace: "nowrap",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                        }}
                      >
                        {item.Amount === null ? (
                          <span>InActive</span>
                        ) : (
                          isWithinLast7Days(item.CreatedAt)?
                          (<span>Active</span>):(<span style={{color:'red'}}>InActive</span>)
                        )}
                      </td>
                    </tr>

                    <tr>
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
                        Amounts:
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
                        {item.Amount === null ? (
                          <span>0</span>
                        ) : (
                          <span>{item.Amount}</span>
                        )}
                      </td>
                    </tr>

                    <tr>
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
                        Bot Timer:
                      </td>
                      <td
                        id="countdown"
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
                        {item.Amount === null ? (
                          <span>0</span>
                        ) : (
                          <span>{<TimeAgo timestamp={item.CreatedAt} />}</span>
                        )} 
                      </td>
                    </tr>

                    <tr>
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
                        Date:
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

                            <FormattedDate timestamp={item.Createdt} />
                      </td>
                    </tr>
                    <tr>
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
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          style={{
                            width: "100%",
                            maxWidth: "250px",
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
                              "linear-gradient(to right, #db1d1d, #db1d1d)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                          onClick={() => {
                            handleDelete(item.UserId);
                          }}
                        >
                          Delete
                        </button>
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
                            width: "100%",
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
                          onClick={() => {
                            Cookies.set("BotId", item.Id, { expires: 2 });
                            Cookies.set("UserId", item.UserId, { expires: 2 });
                            window.location.href = `/EditUser`;
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
