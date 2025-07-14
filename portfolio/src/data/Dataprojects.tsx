import skilltreeImage from '../assets/skilltree.svg';
import blockchainImage from '../assets/blockchain.svg';
import santoriniImage from '../assets/santorini.webp';
import pacmanImage from '../assets/pacman.webp';
import agileImage from '../assets/agile.webp';
import scenticaImage from '../assets/scentica.svg';

const projects = [
  {
    id: 'skill-tree-project',
    title: 'SkillTree',
    description:
      'A web application that allows people to join communities, enhance and certify their skills!',
    image:skilltreeImage,
    tags: ['React', 'Meteor JS', 'JavaScript', 'TailWind CSS', 'MongoDB'],
    demoUrl: '',
    githubUrl: 'https://github.com/Monash-FIT3170/2025W2-Skilltree',
  },
  {
    id: 'blockchain-project',
    title: 'BlockchainEdu',
    description:
      'A web application designed to help users learn about blockchain technology and cryptocurrency!',
    image:blockchainImage,
    tags: ['React', 'TypeScript', 'TailWind CSS'],
    demoUrl: 'https://blockchaineducation.netlify.app/',
    githubUrl:
      'https://github.com/StuvanFIT/Blockchain-Network-Educational-Tool',
  },
  {
    id: 'santorini-project',
    title: 'Santorini Board Game',
    description:
      'A pure-strategy game where you play as a youthful Greek God or Goddess competing to best aid the islands citizens.',
    image:santoriniImage,
    tags: ['Java', 'Java Swing'],
    demoUrl: '',
    githubUrl: 'https://github.com/StuvanFIT/Santorini-Board-Game',
  },
  {
    id: 'pacman-project',
    title: 'AI Pacman Game',
    description:
      'An automated Pacman agent that plays the game intelligently, using search algorithms and reinforcement learning!',
    image:pacmanImage,
    tags: ['Python'],
    demoUrl: '',
    githubUrl:
      'https://github.com/StuvanFIT/Artificial-Intelligence-Pacman-Game',
  },
  {
    id: 'agile-scrum-project',
    title: 'Agile Scrum Project Management Tool',
    description:
      'This project managment tool is used to support start up companies in helping them run projects smoothly, This involves sprint, product backlog and team management!',
    image: agileImage,
    tags: ['Javascript', 'HTML', 'CSS', 'FireBase'],
    demoUrl: 'https://agile-scrum-project-management-tool-five.vercel.app/',
    githubUrl:
      'https://github.com/StuvanFIT/Agile-Scrum-Project-Management-Tool',
  },
  {
    id: 'scentica-project',
    title: 'Scentica',
    description: 'An E-commerce fragrance service',
    image: scenticaImage,
    tags: ['Javascript', 'HTML', 'CSS', 'FireBase'],
    demoUrl: '',
    githubUrl: 'https://github.com/StuvanFIT/Scentica',
  },

]

export { projects }
