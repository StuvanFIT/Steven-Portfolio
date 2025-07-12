import { Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Profile = () => {
  //const [isVisible, setIsVisible] = useState(true);

  const technologyStackScrollBar: string[] = [
    'React',
    'tailwindcss',
    'Vercel',
    'Netlify',
    'NEXT.js',
    'Prisma',
  ]

  return (
    <section
      id="hero"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
    >
      <div
        className={`text-center space-y-8 max-w-4xl transform transition-all duration-1000 `}
      >
        <div className="flex items-center justify-center gap-3 text-xl">
          <span className="text-white ">Welcome to the</span>
          <span className="bg-gradient-to-b from-pastel-purple to-indigo-500 bg-clip-text text-transparent">
            web portfolio
          </span>
          <span>of</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span>Steven </span>
          <span className="bg-gradient-to-b from-pastel-purple to-indigo-500 bg-clip-text text-transparent">
            Kaing
          </span>
        </h1>

        {/* Scroll Text */}
        <p className="text-gray-500 text-sm md:text-base uppercase tracking-[0.3em] mt-12 mb-16">
          Scroll down to learn more about my skills & experiences
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 mb-16">
          {technologyStackScrollBar.map((tool, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-gray-400 text-sm font-light">{tool}</span>
            </div>
          ))}
        </div>

        {/*Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="w-20 h-20 flex items-center justify-center rounded-full text-white bg-pastel-purple text-white hover:bg-indigo-300 hover:text-black transition-all duration-300 cursor-pointer">
            <Mail className="w-10 h-10" />
          </button>
          <button
            onClick={() => window.open('https://github.com/StuvanFIT')}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-pastel-purple text-white hover:bg-indigo-300 transition-all duration-300 cursor-pointer"
          >
            <FaGithub className="w-10 h-10" />
          </button>
        </div>

        {/* Background Gradient Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

export default Profile
