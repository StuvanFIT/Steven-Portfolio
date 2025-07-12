import { Dataskills } from '../data/Dataskills'

const Skills = () => {
  return (
    <section id="Skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical{' '}
          <span className="bg-gradient-to-b from-pastel-purple to-indigo-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Dataskills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium text-gray-300 hover:bg-purple-600/20 hover:text-purple-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
