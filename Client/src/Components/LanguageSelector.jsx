import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    Cookies.set("lang", lang);
  };

  const currentLang = i18n.language || "en";

  return (
    <div className="language-selector ms-2">
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          variant="white"
          size="sm"
          className="d-flex align-items-center gap-2 px-2 py-1 px-sm-2 rounded-pill shadow-sm border-2 lang-toggle-btn"
        >
          <svg
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="languageIconTitle"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            width="21"
            height="21"
          >
            <title id="languageIconTitle">Language</title>
            <circle cx="12" cy="12" r="10"></circle>
            <path
              strokeLinecap="round"
              d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12
         C16,7.75757576 14.6666667,4.42424242 12,2
         C9.33333333,4.42424242 8,7.75757576 8,12
         C8,16.2424242 9.33333333,19.5757576 12,22 Z"
            ></path>
            <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path>
          </svg>

          {/* Correct casing of label */}
          <span className="lang-label">
            {currentLang === "en" ? "English" : "Français"}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 
         .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="bg-dark border-dark">
          <Dropdown.Item
            onClick={() => changeLanguage("en")}
            className="dropdown-item-dark"
          >
            <span role="img" aria-label="English" className="me-2">
              🇺🇸
            </span>{" "}
            English
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeLanguage("fr")}
            className="dropdown-item-dark"
          >
            <span role="img" aria-label="Français" className="me-2">
              🇫🇷
            </span>{" "}
            Français
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
