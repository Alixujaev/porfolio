import React, { useState } from "react";
import next from "../assets/img/next.png";
import aboutme from "../assets/mp3/aboutme.ogg";
import ReactHowler from "react-howler";
import Burger from '../assets/img/burger.png'
import { useDispatch, useSelector } from "react-redux";
import { changeShowTrue } from "../redux/action";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
    console.log(play);
  };

  const handleShowTrue = () => {
    dispatch(changeShowTrue())
  }

  return (
    <div className="header">
      <div className="audio_info">
        <ReactHowler
            src={aboutme}
            playing={play}
          />
          <p>{t("sound")}: </p> {play ? <button className="button_on" onClick={() => handlePlay()}>ON</button> : <button className="button_off" onClick={() => handlePlay()}>{t("off")}</button>}
      </div>
      <div className="header_nav_burger" onClick={handleShowTrue}>
        <img alt='burger' src={Burger}/>
      </div>
      <div className="header_content"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="300">
        <h1>
          {t("hi")}, <br />
          {t("i`m")} I<span className="yellow_span">.alixujaev,</span>
          <br />
          <span className="yellow_span">MERN</span> {t("developer_title")}
        </h1>
        <p>{t("react_dev")} / {t("node_dev")}</p>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><button class="slide_from_left">{t("contact_me")}</button></Link>
      </div>
      <div>
        <div className="header_after_content">
          <p className="scroll_text">
            <span>{t("scroll_down")}</span>{" "}
            <img alt="icon" className="slider_icon" src={next} />
          </p>
          <p className="scroll_text">
            <span>{t("scroll_down")}</span>{" "}
            <img alt="icon" className="slider_icon" src={next} />
          </p>
        </div>
        <div></div>
      </div>
      <h2 className='back_title'>{t("hi")}</h2>
    </div>
  );
};

export default Header;
