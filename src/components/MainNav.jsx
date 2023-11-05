import { useState } from 'react'
import './MainNav.css'

// aria-current='page', esto va en el elemento con la clase active
export const MainNav = () => {
  const [currentPage, setCurrentPage] = useState('Projects')

  return (
    <nav id='nav' aria-label='Main Navigation' className='nav'>
      <h2 className='nav-current-page'>{currentPage}</h2>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <a
            className={currentPage === 'Projects' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#projects'
            onClick={() => setCurrentPage('Projects')}
          >
            Projects
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentPage === 'Stack' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#stack'
            onClick={() => setCurrentPage('Stack')}
          >
            Stack
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentPage === 'About' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#about'
            onClick={() => setCurrentPage('About')}
          >
            About
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            className={currentPage === 'Contact' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            href='#contact'
            onClick={() => setCurrentPage('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
