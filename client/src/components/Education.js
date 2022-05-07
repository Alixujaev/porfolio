import React from 'react'
import Proweb from '../assets/img/proweb.jpg'
import Mohirdev from '../assets/img/mohirder.jpg'
import { useTranslation } from 'react-i18next';

const Education = () => {
  const {t} = useTranslation();
  return (
    <div className='edu'>
      <h2 className='yellow_span edu_title'>{t("edu")}</h2>
      <div className='edu_cards'>
        <div className='edu_card'  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className='edu_card_desc'>
          <p className='edu_card_p'>{t("front_end_developer")}</p>
          <h5><a href='https://proweb.uz/'>PROWEB</a></h5>
          <p className='edu_card_txt'>{t("proweb_desc")}</p>
          </div>
          <img alt='img' src={Proweb}/>
      </div>
        <div className='edu_card'  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className='edu_card_desc'>
          <p className='edu_card_p'>{t("mern_stack_developer")}</p>
          <h5><a href='https://mohirdev.uz/'>MOHIRDEV</a></h5>
          <p className='edu_card_txt'>{t("mohir_desc")}</p>
          </div>
          <img alt='img' src={Mohirdev}/>
      </div>
      </div>
      <h2 className='back_title edu_back_title'>{t("edu")}</h2>
    </div>
  )
}

export default Education