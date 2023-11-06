import React, { useMemo } from 'react'
import './css/Footer.css'
import { Github, LinkedIn, Twitter } from '../assets/icons/Icons'

export const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear())

  return (
    <footer id='footer' className='footer'>
      <ul className='footer-list'>
        <li className='footer-list-item'>
          <a
            href='https://github.com/yourgithubprofile'
            className='footer-link'
            aria-label='GitHub Profile'
          >
            <Github />
          </a>
        </li>
        <li className='footer-list-item'>
          <a
            href='https://www.linkedin.com/in/yourlinkedinprofile'
            className='footer-link'
            aria-label='LinkedIn Profile'
          >
            <LinkedIn />
          </a>
        </li>
        <li className='footer-list-item'>
          <a
            href='https://twitter.com/yourtwitterprofile'
            className='footer-link'
            aria-label='Twitter Profile'
          >
            <Twitter />
          </a>
        </li>
      </ul>
      <p className='footer-text'>
        &copy; {currentYear}
        <span className='footer-text-name'>
          &nbsp;Jorge Armando Ceras Cárdenas
        </span>
      </p>
    </footer>
  )
}
