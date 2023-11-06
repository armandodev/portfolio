import { Github, LinkedIn, Twitter } from '../assets/icons/Icons'
import './css/Banner.css'

export const Banner = () => {
  return (
    <section id='m-banner'>
      <h1 className='m-banner-username'>
        {'>'}@armandodev<span className='cursor'>_</span>
      </h1>
      <h2 className='m-banner-title'>
        {'>'}Full Stack Web Developer<span className='cursor active'>_</span>
      </h2>
      <nav
        id='m-banner-social-nav'
        role='navigation'
        aria-label='Social media links'
      >
        <ul className='m-banner-social-nav-list'>
          <li className='m-banner-social-nav-list-item'>
            <a
              className='m-banner-social-nav-list-item-link'
              href='https://github.com/ArmandoDev'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github />
            </a>
          </li>
          <li className='m-banner-social-nav-list-item'>
            <a
              className='m-banner-social-nav-list-item-link'
              href='https://github.com/ArmandoDev'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <LinkedIn />
            </a>
          </li>
          <li className='m-banner-social-nav-list-item'>
            <a
              className='m-banner-social-nav-list-item-link'
              href='https://twitter.com/armandodev_'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
