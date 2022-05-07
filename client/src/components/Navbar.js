import React from 'react'
import linked from '../assets/img/in.png'
import github from '../assets/img/github.png'
import telegram from '../assets/img/telegram.png'
import { Link } from 'react-scroll'
import Cancel from '../assets/img/cancel.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowFalse } from '../redux/action'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const isShow = useSelector(state => state.isShow)
  const dispatch = useDispatch()
  const {t} = useTranslation()

  const handleShowFalse = () => {
    dispatch(changeShowFalse())
    console.log(isShow);
  }

  return (
    <div className={`${isShow ? `navbar_media` : 'navbar'}`}>
      <div className='navbar_content'>
        <div className='navbar_cancel'>
          <img alt='icon' src={Cancel} onClick={handleShowFalse}/>
        </div>
      <Link style={{cursor: 'pointer'}} onClick={handleShowFalse} to="header" spy={true} smooth={true} offset={0} duration={500} className='navbar_logo'>
        <div className='navbar_logo-text'><h1>I </h1><span className="yellow_span">.ali</span></div>
        <h6>{t("web_dev")}</h6>
      </Link>
      <ul className='navbar_main_link'>
        <li>
          <Link activeClass='active' onClick={handleShowFalse} style={{cursor: 'pointer'}} to="mySelf" spy={true} smooth={true} offset={100} duration={500}>{t("about_me")}</Link>
        </li>
        <li>
          <Link style={{cursor: 'pointer'}} onClick={handleShowFalse} to="portfolio" spy={true} smooth={true} offset={100} duration={500}>{t("portfolio")}</Link>
        </li>
        <li>
          <Link style={{cursor: 'pointer'}} onClick={handleShowFalse} to="edu" spy={true} smooth={true} offset={0} duration={500}>{t("edu")}</Link>
        </li>
        <li>
          <Link style={{cursor: 'pointer'}} onClick={handleShowFalse} to="contact" spy={true} smooth={true} offset={0} duration={500}>{t("contact_nav")}</Link>
        </li>
      </ul>
      <div className='navbar_contacts'>
        <a target={'_blank'} href='https://github.com/Alixujaev'>
        <img alt='logo'src={github} />
        </a>
        <a target={'_blank'} href='https://www.linkedin.com/in/islom-alixujaev-42ab39232/'>
        <img alt='logo'src={linked} />
        </a>
        <a target={'_blank'} href='https://t.me/alixujaev'>
        <img alt='logo'src={telegram} />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Navbar