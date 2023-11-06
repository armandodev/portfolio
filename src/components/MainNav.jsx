import { useState } from 'react'
import './css/MainNav.css'

// aria-current='page', esto va en el elemento con la clase active
export const MainNav = () => {
  const [currentPage, setCurrentPage] = useState('Projects')

  const currentProjects = currentPage === 'Projects'
  const currentStack = currentPage === 'Stack'
  const currentAbout = currentPage === 'About'
  const currentContact = currentPage === 'Contact'

  return (
    <nav id='nav' aria-label='Main Navigation' className='nav'>
      <h2 className='nav-current-page'>{currentPage}</h2>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <a
            className={currentProjects ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#projects'
            onClick={() => setCurrentPage('Projects')}
            {...currentProjects && { 'aria-current': 'page' }}
          >
            Projects
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentStack ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#stack'
            {...currentStack && { 'aria-current': 'page' }}
            onClick={() => setCurrentPage('Stack')}
          >
            Stack
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentAbout ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#about'
            {...currentAbout && { 'aria-current': 'page' }}
            onClick={() => setCurrentPage('About')}
          >
            About
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentContact ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#contact'
            {...currentContact && { 'aria-current': 'page' }}
            onClick={() => setCurrentPage('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
