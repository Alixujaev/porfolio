import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Header from "../components/Header";
import MySelf from "../components/MySelf";
import Portfolio from "../components/Portfolio";

const language = [
  {
    code: "en",
    name: "english",
    country_code: "gb",
  },
  {
    code: "ru",
    name: "россия",
    country_code: "ru",
  },
  {
    code: "uz",
    name: "o`zbek",
    country_code: "uz",
  },
];


const Main = () => {
  const [showLang, setShowLang] = useState(false)
  const {t} = useTranslation()
  const handleShowLang = () => {
    setShowLang(!showLang)
    console.log(showLang);
  }


  const changeLang = (item) => {
    i18next.changeLanguage(item)
    setShowLang(!showLang)
  }

  return (
    <div className="main">
      <Header />
      <MySelf />
      <Portfolio />
      <Education />
      <Contact />
      <div className="select_content">
        <div class="dropdown">
          <div class="dropbtn" onClick={handleShowLang}>
            {t("language")}
          </div>
          <div id="myDropdown" className={`${showLang ? `dropdown-content` : `dropdown-content_none`}`}>
            {language.map(lang => (
              <button key={lang.code} className="drop_btn" onClick={() => changeLang(lang.code)}>{lang.code}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
