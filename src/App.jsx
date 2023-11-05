import './App.css'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { MainNav } from './components/MainNav'
import { ProjectsContainer } from './components/ProjectsContainer'

function App () {
  return (
    <>
      <main id='main'>
        <Banner />
        <MainNav />
        <ProjectsContainer />
        <Footer />
      </main>
    </>
  )
}

export default App
