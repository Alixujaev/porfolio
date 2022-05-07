import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux";

const MySelf = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const {skills} = useSelector(state => state)

  useEffect(() => {
    fetch('http://localhost:5000/getskills')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({type: 'GET_SKILLS', payload: data.works})
      })
      .catch(() => {
        console.log('Skills olishda xato boldi');
      })

      console.log(skills);
  }, [])

  return (
    <div className='mySelf' id='#mySelf'>
      <div className='mySelf_desc'>
        <h2 className='main_title'>{t("me")} <span className='yellow_span'>{t("my_self")}</span> {t("and_i")} </h2> 
        <p>{t("about_me_1")}</p>
        <p>{t("about_me_2")} </p>
        <p>{t("about_me_3")}</p>
      </div>
      <div className='mySelf_animate' data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
        {skills ? skills.map(skill => (
        <div key={skill._id} className='mySelf_card'>
          <img alt='icon' src={skill.photo}/>
          <p>{skill.name}</p>
        </div>
        )) : <p>Nothing found!</p>}
      </div>
      <h2 className='back_title'>{t("back_me")}</h2>
    </div>
  )
}

export default MySelf