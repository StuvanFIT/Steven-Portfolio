import { Award, Code, Globe } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
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
            I'm a passionate software developer driven by the belief that code should 
            serve as a tool to help people and communities thrive. With a foundation in 
            full-stack development, I specialise in creating meaningful digital solutions 
            using modern technologies like React, Next.js, and TypeScript.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My journey began with a simple desire to help others and provide valuable 
            consultation to businesses seeking digital transformation. Today, I focus on 
            translating innovative business ideas into powerful digital realities, 
            ensuring every line of code contributes to helping businesses succeed 
            and make a positive impact in their communities.
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
