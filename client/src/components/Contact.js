import React from "react";
import { useTranslation } from "react-i18next";
import linked from "../assets/img/big-in.png";
import telegram from "../assets/img/big-telegram.png";
import github from "../assets/img/bit-git.png";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const { messageName, messageEmail, messageSub, messageBody, errorSuccess, showMessage } = useSelector(
    (state) => state
  );
  const { t } = useTranslation();

  const sendMessage = () => {
    fetch('http://localhost:5000/message', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: messageName,
        email: messageEmail,
        subject: messageSub,
        message: messageBody
      })
    })
    .then(res => res.json())
    .then(result => {
      dispatch({type: 'SHOW_MESSAGE'})
      dispatch({type: 'ERROR_SUCCESS', payload: result})
      dispatch({type: 'CLEAR_INPUTS'})
    })
    .catch(err => {
      console.log('Message da erro bovotti');
    })
  }
  
  return (
    <div className="contact" id="#contact">
      <div className="contact_desc">
        <h2>
          {t("contact_me_1")}{" "}
          <span className="yellow_span">{t("contact_me_2")}</span>
        </h2>
        <p>{t("contact_desc")}</p>
      </div>
      <div className="contact_content">
        <form data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="input_group">
            <input
              type="text"
              placeholder={t("form_name")}
              value={messageName}
              onChange={(e) =>
                dispatch({ type: "MESSAGE_NAME", payload: e.target.value })
              }
            />
            <input
              type="email"
              placeholder={t("form_email")}
              value={messageEmail}
              onChange={(e) =>
                dispatch({ type: "MESSAGE_EMAIL", payload: e.target.value })
              }
            />
          </div>
          <input
            type="text"
            placeholder={t("form_sub")}
            value={messageSub}
            onChange={(e) =>
              dispatch({ type: "MESSAGE_SUB", payload: e.target.value })
            }
          />
          <textarea
            placeholder={t("message")}
            value={messageBody}
            onChange={(e) =>
              dispatch({ type: "MESSAGE_BODY", payload: e.target.value })
            }
          />
          {showMessage ? (
            errorSuccess.error ? <p className="info_txt" style={{"color": 'red'}}>{t("input_message_err")}</p> : <p className="info_txt" style={{'color': 'green'}}>{t("input_message_succ")}</p>
          ) : ''}
          <button onClick={sendMessage} type='button' className="slide_from_left">{t("send_message")}</button>
        </form>
        <div className="secont_content">
          <div className="contact_links">
            <a href="https://www.linkedin.com/in/islom-alixujaev-42ab39232/" target={'_blank'}>
              <img alt="img" src={linked} />
            </a>
            <a href="https://t.me/alixujaev" target={'_blank'}>
              <img alt="img" src={telegram} />
            </a>
            <a href="https://github.com/Alixujaev" target={'_blank'}>
              <img alt="img" src={github} />
            </a>
          </div>
        </div>
      </div>
      <h2 className="back_title">{t("contact_me_1")}</h2>
    </div>
  );
};

export default Contact;
