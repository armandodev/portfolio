import './App.css'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { MainNav } from './components/MainNav'
import { useNav } from './hooks/useNav'
import { ProjectsContainer } from './components/ProjectsContainer'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App () {
  const { currentPage, handlePageChange } = useNav()

  return (
    <>
      <main id='main'>
        <Banner />
        <MainNav currentPage={currentPage} handlePageChange={handlePageChange} />
        {currentPage === 'Projects' && <ProjectsContainer />}
        {currentPage === 'Stack' && <Stack />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}

export default App
