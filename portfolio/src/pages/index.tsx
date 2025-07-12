import About from '../components/About'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Profile />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
