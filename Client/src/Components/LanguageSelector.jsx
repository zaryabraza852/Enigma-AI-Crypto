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
    <div className="language-selector" style={{ marginLeft: "20px" }}>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="dark" size="md" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faGlobe} className="me-2" />
          {currentLang.toUpperCase()}
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="bg-dark border-dark">
          <Dropdown.Item onClick={() => changeLanguage("en")} className="dropdown-item-dark">
          <span role="img" aria-label="English" className="me-2">
            🇺🇸
          </span> English
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("fr")} className="dropdown-item-dark">
          <span role="img" aria-label="Français" className="me-2">
            🇫🇷
          </span> Français
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
