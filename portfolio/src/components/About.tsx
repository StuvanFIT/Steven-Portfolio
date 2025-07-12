import { Award, Code, Globe } from 'lucide-react'

const About = () => {
  return (
    <section id="About" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About{' '}
          <span className="bg-gradient-to-b from-pastel-purple to-indigo-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 4 years of
              experience creating innovative web solutions. I specialize in
              building scalable applications using modern technologies like
              React, Next.js, and Node.js.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity about how
              things work on the internet. Today, I help businesses transform
              their ideas into digital realities, focusing on user experience
              and performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-5 h-5" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Code className="w-5 h-5" />
                <span>Clean Code Advocate</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Globe className="w-5 h-5" />
                <span>Remote Collaboration</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-108 h-108  bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full flex items-center justify-center">
              <div className="text-6xl text-purple-400">👨‍💻</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
