import { Code, Database, Globe, Wrench } from 'lucide-react'

const Dataskills = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-6 h-6" />,
    skills: [
      'React',
      'NEXT .js',
      'Tailwind CSS',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Java'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Globe className="w-6 h-6" />,
    skills: [
      'AWS',
      'Vercel',
      'Netlify',
      'Firebase',
      'Docker',
      'CI/CD',
      'Git',
      'Heroku',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Prisma', 'Figma', 'VS Code', 'Vite', 'Cypress'],
  },
]

export { Dataskills }
