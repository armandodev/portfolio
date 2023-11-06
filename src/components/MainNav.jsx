import React from 'react'
import './css/MainNav.css'

export const MainNav = ({ currentPage, handlePageChange }) => {
  const handleNavigation = (event, page) => {
    event.preventDefault()
    handlePageChange(page)
  }

  return (
    <nav id='nav' aria-label='Main Navigation' className='nav'>
      <h2 className='nav-current-page'>{currentPage}</h2>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <a
            href='#projects'
            className={currentPage === 'Projects' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            onClick={(event) => handleNavigation(event, 'Projects')}
            aria-current={currentPage === 'Projects' ? 'page' : undefined}
          >
            Projects
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            href='#stack'
            className={currentPage === 'Stack' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            onClick={(event) => handleNavigation(event, 'Stack')}
            aria-current={currentPage === 'Stack' ? 'page' : undefined}
          >
            Stack
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            href='#about'
            className={currentPage === 'About' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            onClick={(event) => handleNavigation(event, 'About')}
            aria-current={currentPage === 'About' ? 'page' : undefined}
          >
            About
          </a>
        </li>
        <li className='nav-list-item'>
          <a
            href='#contact'
            className={currentPage === 'Contact' ? 'nav-list-item-link active' : 'nav-list-item-link'}
            onClick={(event) => handleNavigation(event, 'Contact')}
            aria-current={currentPage === 'Contact' ? 'page' : undefined}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
