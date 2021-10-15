import linkCursor from '../../images/portfolio-link.svg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__list-element'>
          <a href='https://vmikhailw.github.io/how-to-learn/index.html' className='portfolio__link'
            target='_blank' rel='noreferrer'>Статичный сайт
            <img src={linkCursor} alt='Указатель ссылки' className='portfolio__link-cursor' />
          </a>
        </li>
        <li className='portfolio__list-element'>
          <a href='https://vmikhailw.github.io/russian-travel/index.html' className='portfolio__link'
            target='_blank' rel='noreferrer'>Адаптивный сайт
            <img src={linkCursor} alt='Указатель ссылки' className='portfolio__link-cursor' />
          </a>
        </li>
        <li className='portfolio__list-element'>
          <a href='http://express.nomoredomains.club' className='portfolio__link'
            target='_blank' rel='noreferrer'>Одностраничное приложение
            <img src={linkCursor} alt='Указатель ссылки' className='portfolio__link-cursor' />
          </a>
        </li>
      </ul>
    </section>
  )
}
