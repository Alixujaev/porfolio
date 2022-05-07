import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import Insta from '../assets/img/instagram.png'
import Netflix from '../assets/img/netflix.png';
import {useDispatch, useSelector} from 'react-redux'

const Portfolio = () => {
  const dispatch = useDispatch()
  const {works} = useSelector(state => state)
  const {t} = useTranslation();

  useEffect(() => {
    fetch('http://localhost:5000/getworks')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'GET_WORKS', payload: data.works})
      })
      .catch(() => {
        console.log(`Worklani olishda xato`);
      })
  }, [])

  return (
    <div className='portfolio'>
      <div className='portfolio_desc' >
        <div>
        <h2 className='main_title'>{t("my")} <span className='yellow_span'>{t("portfolio")}</span></h2>
        <p  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">{t("portfolio_desc")}
        </p>
        </div>
      </div>
      <div className='portfolio_cards'>
        {works.length ? (
        works.map(work => (
          <div key={work._id} className='portfolio_card' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
        <img src={work.photo} alt="img" className='portfolio_img'/>
        <div className='portfolio_info'>
        <p>{work.name}</p>
        <p>{work.type}</p>
          <a target={'_blank'} href={work.link}>{t("view_demo")}</a>
          {work.responsive ? <span>{t("responsive")}</span> : <span>{t("not_responsive")}</span>}
        </div>
        <div className='portfolio_card_after'></div>
      </div>
        ))
        ) : <p>Nothing found!</p>}
      </div>
      <h2 className='back_title port_back_title'>{t("work")}</h2>
    </div>
  )
}

export default Portfolio