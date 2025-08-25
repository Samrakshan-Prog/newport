import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
 
  {
    image: '/images/project.gif',
    title: 'Image Security Using Multi-Agent Swarm Behavior and Quantum-Inspired Chaotic Encoding ',
    description:
      'Built an image encryption and decryption system using Multi-Agent Swarm Behavior and Quantum-Inspired Chaotic Encoding, ensuring secure transmission and exact recovery of images.',
    technologies: ['Html/Css', 'JavaScript', 'APIs', 'Flask', 'python'],
    links: {
      github: 'https://github.com/Samrakshan-Prog/Image_Encryption_using_MASB_-_QICE.git',
      // githubApi:
      //   'https://api.github.com/repos/yourusername/portfolio-generator',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Software developer Internship',
    link: `https://skillcrafttech.com`,
    company: 'Skillcraft Tecnology, Remote',
    description:
      'Assisted in developing and debugging software modules, working on task-based assignments using HTML, CSS, JavaScript, and Python. Gained practical experience in coding, testing, and version control while contributing to small-scale development tasks.',
    period: 'Jul 2025 – Aug 2025',
    technologies: [
      'java','python','APIs',
    ],
  },
  {
    title: 'Java Developer Intern',
    company: `Codsoft, Remote`,
    link: `https://www.codsoft.in/`,
    description:
      'Worked on Java-based development tasks, implementing object-oriented programming concepts and building small applications. Enhanced skills in core Java, debugging, and project execution in a virtual environment.',
    period: 'Jun 2025 – Jul 2025',
    technologies: [
      'Core Java',
      'Java8',
      'javaFX',
      'JavaSwing',
    ],
  },
] as const;

export const skillsData = [
   { icon: <Icons.html className="size-12" />, label: 'HTML5', level: 'Expert' },
   { icon: <Icons.css className="size-12" />, label: 'CSS3', level: 'Expert' },
  {
    icon: <Icons.javascript className="size-12" />,
    label: 'JavaScript',
    level: 'Expert',
  },

    {
    icon: <Icons.nodejs className="size-12" />,
    label: 'Nodejs',
    level: 'Expert',
  },

  {
    icon: <Icons.java className="size-12" />,
    label: 'React',
    level: 'Expert',
  },
 

  {
    icon: <Icons.github className="size-12" />,
    label: 'Git/GitHub',
    level: 'Expert',
  },
  {
    icon: <Icons.mongodb className="size-12" />,
    label: 'MongoDB',
    level: 'Advanced',
  },
  {
    icon: <Icons.python className="size-12" />,
    label: 'python',
    level: 'Basic',
  },
 
] as const;
