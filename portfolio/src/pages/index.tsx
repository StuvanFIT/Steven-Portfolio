import About from '../components/About'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
