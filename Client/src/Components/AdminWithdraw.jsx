import React,{useState, useEffect} from "react";
import FormattedDate from "./FormattedDate";
const AdminWithdraw = () => {
  const [items, setItems] = useState([]);

  async function GetAdminWithdraw() {
    await fetch(`${process.env.REACT_APP_URI}/GetAdminWithdraw`, {
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
        setItems(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    GetAdminWithdraw();
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
                        Currency:
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
                        {item.Currency}
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
                        {item.Amounts}
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
                        Address:
                      </td>
                      <td
                        style={{
                          background: "#00000000",
                          color: "#fff",
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "7px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          border: "0px solid #00000000",
                          maxWidth: "100px",
                          wordWrap: "break-word",
                        }}
                      >
                        {item.Address}
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
                        <FormattedDate timestamp={item.Date} />
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

export default AdminWithdraw;
