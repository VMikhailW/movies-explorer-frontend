import studentPhoto from '../../images/student-photo.png';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='main__title'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__description'>
          <h3 className='about-me__title'>Михаил</h3>
          <p className='about-me__caption'>Фронтенд-разработчик, 29 лет.</p>
          <p className='about-me__text'>Я завершил учебу в 2013 году, КазИТУ по специальности "Информационные системы - техник программист",
          работал по специальности и решил повысить квалификацию пройдя обучающие курсы от "Яндекс-Практикум" "Веб-разработчик".
          .</p>
          <ul className='about-me__links'>
            <li className='about-me__list-element'>
              <a href='https://twitter.com' className='about-me__link'>Twitter</a>
            </li>
            <li className='about-me__list-element'>
              <a href='https://github.com/VMikhailW' className='about-me__link'>Github</a>
            </li>
          </ul>
        </div>
        <img src={studentPhoto} alt='Фото студента' className='about-me__photo' />
      </div>
    </section>
  )
}
