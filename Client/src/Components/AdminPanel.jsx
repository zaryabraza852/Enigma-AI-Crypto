import React from "react";
import Cookies from 'js-cookie'
const AdminPanel = () => {
  function logout() {
    Cookies.remove("login");
    Cookies.remove("email");
    Cookies.remove("token");
    window.location.href = "/";
  }
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
        <img
          src="./assets/logo.png"
          style={{ width: "70px", height: "auto" }}
          alt=""
        />
      </div>

      <h1 style={{ color: "#fff", marginTop: "20px" }}> Admin Panel</h1>

      <div
        className="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          paddingBottom: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "250px",
              borderRadius: "30px",
              backgroundColor: "#202020",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px",
              border: "none",
              position: "relative",
              overflow: "hidden",
              backgroundImage: "linear-gradient(to right, #6e6e6e, #756e83)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            onClick={()=>{window.location.href=`/UsersList`}}
          >
            Users List
          </button>
        </div>

        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "250px",
              borderRadius: "30px",
              backgroundColor: "#202020",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px",
              border: "none",
              position: "relative",
              overflow: "hidden",
              backgroundImage: "linear-gradient(to right, #6e6e6e, #756e83)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            onClick={()=>{window.location.href = `/AdminWithdraw`}}
          >
            Cashout List
          </button>
        </div>

        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "250px",
              borderRadius: "30px",
              backgroundColor: "#202020",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px",
              border: "none",
              position: "relative",
              overflow: "hidden",
              backgroundImage: "linear-gradient(to right, #6e6e6e, #756e83)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            onClick={()=>{window.location.href = `/CryptoAddy`}}
          >
            Crypto Addy
          </button>
        </div>

        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "250px",
              borderRadius: "30px",
              backgroundColor: "#202020",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px",
              border: "none",
              position: "relative",
              overflow: "hidden",
              backgroundImage: "linear-gradient(to right, #6e6e6e, #756e83)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            onClick={()=>{logout()}}
          >
            Logout
          </button>
        </div>

        <div
          className="col-lg-2 col-md-5 mx-auto text-left"
          style={{
            margin: "10px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AdminPanel;
