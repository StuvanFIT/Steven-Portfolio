import { ExternalLink, Github } from 'lucide-react'

import { projects } from '../data/Dataprojects'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'

const Projects = () => {

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectHover = (projectId:string) => {
    setHoveredProject(projectId);
  }

  const handleProjectLeave = () => {
    setHoveredProject(null);
  }


  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured{' '}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={()=> handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectLeave()}

              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Fixed height image section */}
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

               {/* Content section with flexbox layout */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="h-8 flex items-start mb-3">
                  <div className='text-xl font-bold text-white line-clamp-1'>
                    {project.title}
                  </div>
                </h3>

                {/* Description section - fixed height with line clamping */}
                <div className='h-20 mb-4 flex items-start'>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>


                <div className='h-16 mb-6 flex items-start'>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>



                <div className="h-12 relative overflow-hidden mt-auto">
                  <div 
                    className={`absolute inset-x-0 bottom-0 flex gap-4 transition-transform duration-300 ease-out ${
                      hoveredProject === project.id 
                        ? 'translate-y-0' 
                        : 'translate-y-full'
                    }`}
                  >
                    <button
                      onClick={() => window.open(project.demoUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button
                      onClick={() => window.open(project.githubUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>



              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
