import { Github, Twitter } from './assets/icons/socialIcons'
import './TopHeader.css'

export const TopHeader = () => {
  return (
    <header id='th'>
      <div id='th-wrapper'>
        <a href='./' className='th-logo'>@armandodev_</a>

        <nav className='th-nav' id='th-nav'>
          <ul className='th-nav-list' aria-label='Main menu'>
            <li className='th-nav-list-item'>
              <a className='th-nav-list-item-link active' href='#about'>About</a>
            </li>
            <li className='th-nav-list-item'>
              <a className='th-nav-list-item-link' href='#projects'>Projects</a>
            </li>
            <li className='th-nav-list-item'>
              <a className='th-nav-list-item-link' href='#contact'>Contact</a>
            </li>
            <li className='th-nav-list-item'>
              <a className='th-nav-list-item-link' href='#stack'>Stack</a>
            </li>
          </ul>
        </nav>

        <nav className='th-nav' id='th-social'>
          <ul className='th-social-list' aria-label='Social media links'>
            <li className='th-social-list-item'>
              <a
                className='th-social-list-item-link'
                href='https://github.com/ArmandoDev'
                target='_blank'
                rel='noreferrer'
              >
                <Github className='th-social-list-item-svg' width='32' height='32' />
              </a>
            </li>
            <li className='th-social-list-item'>
              <a
                className='th-social-list-item-link'
                href='https://twitter.com/armandodev_'
                target='_blank'
                rel='noreferrer'
              >
                <Twitter className='th-social-list-item-svg' width='32' height='32' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
