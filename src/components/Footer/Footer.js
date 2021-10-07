import { Route } from 'react-router-dom';

export default function Footer() {
  return (
    <Route exact path={['/', '/movies', '/saved-movies']}>
      <section className='footer'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__container'>
          <p className='footer__year'>&copy;2021</p>
          <ul className='footer__links'>
            <li className='footer__list-element'>
              <a href='https://praktikum.yandex.ru' className='footer__link'
              target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            </li>
            <li className='footer__list-element'>
              <a href='https://github.com/VMikhailW' className='footer__link'
              target='_blank' rel='noreferrer'>Github</a>
            </li>
            <li className='footer__list-element'>
              <a href='https://twitter.com' className='footer__link'
              target='_blank' rel='noreferrer'>Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </Route>
  )
}
