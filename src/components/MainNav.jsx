import './MainNav.css'

// aria-current='page', esto va en el elemento con la clase active
export const MainNav = () => {
  return (
    <nav id='th-nav' aria-label='Main Navigation' className='th-nav'>
      <ul className='th-nav-list'>
        <li className='th-nav-list-item'>
          <a className='th-nav-list-item-link' href='#projects'>
            Projects
          </a>
        </li>
        <li className='th-nav-list-item'>
          <a className='th-nav-list-item-link' href='#stack'>
            Stack
          </a>
        </li>
        <li className='th-nav-list-item'>
          <a
            className='th-nav-list-item-link'
            href='#about'
          >
            About
          </a>
        </li>
        <li className='th-nav-list-item'>
          <a className='th-nav-list-item-link' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
