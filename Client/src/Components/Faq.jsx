import React, { useState } from "react";
import SideBar from "./SideBar";

const Faq = () => {
  const [showText, setShowText] = useState({});

  const botInfo = [
    {
      question: "What makes your trading bot different?",
      answer:
        "Our bot uses advanced algorithms to consistently generate profits.",
    },
    {
      question: "How do you ensure security?",
      answer: "We employ top-level encryption and robust risk management.",
    },
    {
      question: "Is the investment strategy customizable?",
      answer:
        "No, the investment strategy is predefined and optimized for profitability.",
    },
    {
      question: "How reliable are your profit claims?",
      answer: "Our profits are verified, and we collect a 5% share.",
    },
    {
      question: "How does your bot handle market changes?",
      answer: "Our bot adapts to market volatility effectively.",
    },
    {
      question: "What support do you offer?",
      answer: "We provide round-the-clock assistance for setup and queries.",
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up, customize, and start trading profitably.",
    },
    {
      question: "Are there hidden fees",
      answer: "No, our fee structure is straightforward: 5% of profits.",
    },
    {
      question: "How do you ensure long-term success?",
      answer:
        "Our bot is designed for sustainable profitability with continuous optimization.",
    },
    {
      question: `How can I be sure that your Enigma robot is the best choice for me?`,
      answer: `With years of research, development, and rigorous
      testing in real environments, our Enigma robot is a
      powerful and reliable tool. With exceptional customer
      support, we guarantee profits that far exceed market
      standards.`,
    },
  ];

  const toggleText = (index) => {
    setShowText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
      <SideBar/>
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
                backgroundImage: "linear-gradient(to right, #9d87a7, #b23be9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                zIndex: 10,
              }}
            >
              Faq{" "}
            </span>
          </h1>
          {botInfo.map((info, index) => (
            <div
              key={index}
              style={{
                marginTop: "30px",
                backgroundImage: "linear-gradient(to right, #262626, #292640)",
                borderRadius: "20px",
                width: "100%",
                padding: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {info.question}
                </span>
                <div style={{ marginLeft: "auto" }}>
                  <button
                    onClick={() => toggleText(index)}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#00000000",
                      color: "#fff",
                      fontWeight: "bold",
                      border: "none",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      backgroundImage:
                        "linear-gradient(to right, #3f2d57, #5e4c78)",
                      paddingRight: "10px",
                      paddingBottom: "8px",
                      paddingTop: "0px",
                      minWidth: "40px",
                    }}
                  >
                    {showText[index] ? "-" : "+"}
                    <span
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "5px",
                        zIndex: 10,
                        padding: "0px",
                        background: "#202020",
                        fontSize: "20px",
                        pointerEvents: "none",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      {showText[index] ? "-" : "+"}
                    </span>
                  </button>
                </div>
              </div>
              <p
                style={{
                  marginLeft: "5px",
                  fontSize: "12px",
                  color: "#7d7d7f",
                  fontWeight: "bold",
                  display: showText[index] ? "block" : "none",
                  transition: "display 0.3s ease-in-out",
                }}
              >
                {info.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
