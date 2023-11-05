import './App.css'
import { Banner } from './components/Banner'
import { MainNav } from './components/MainNav'
import { ProjectsContainer } from './components/ProjectsContainer'

function App () {
  return (
    <>
      <main id='main'>
        <Banner />
        <MainNav />
        <ProjectsContainer />
      </main>
    </>
  )
}

export default App
