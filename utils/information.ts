import {
  faCloud,
  faFire,
  faEnvelope,
  faDatabase,
  faVirus,
  faUsers,
  faWindowMaximize,
  faMobileAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJsSquare,
  faReact,
  faNodeJs,
  faPhp,
  faLinkedin,
  faBitcoin,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';

export const technologies = [
  {
    title: 'HTML',
    icon: faHtml5,
    url: 'https://en.wikipedia.org/wiki/HTML',
  },
  {
    title: 'CSS',
    icon: faCss3,
    url: 'https://www.w3schools.com/css/css_intro.asp',
  },
  {
    title: 'SASS',
    icon: faSass,
    url: 'https://sass-lang.com/',
  },
  {
    title: 'Tailwind CSS',
    icon: faCss3,
    url: 'https://tailwindcss.com/',
  },
  {
    title: 'Bootstrap',
    icon: faBootstrap,
    url: 'https://getbootstrap.com/',
  },
  {
    title: 'JS',
    icon: faJsSquare,
    url: 'https://www.w3schools.com/whatis/whatis_js.asp',
  },
  {
    title: 'TS',
    icon: faJsSquare,
    url: 'https://www.typescriptlang.org/',
  },
  {
    title: 'React',
    icon: faReact,
    url: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'React Native',
    icon: faReact,
    url: 'https://reactnative.dev/',
  },
  {
    title: 'Next JS',
    icon: faReact,
    url: 'https://nextjs.org/',
  },
  {
    title: 'Redux',
    icon: faReact,
    url: 'https://redux.js.org/',
  },
  {
    title: 'React Query',
    icon: faReact,
    url: 'https://react-query.tanstack.com/',
  },
  {
    title: 'Material UI',
    icon: faReact,
    url: 'https://mui.com/',
  },
  {
    title: 'Angular',
    icon: faAngular,
    url: 'https://angular.io/',
  },
  {
    title: 'Node JS',
    icon: faNodeJs,
    url: 'https://nodejs.org/en/',
  },
  {
    title: 'MongoDB',
    icon: faCloud,
    url: 'https://www.mongodb.com/',
  },
  {
    title: 'Firebase',
    icon: faFire,
    url: 'https://firebase.google.com/',
  },
  {
    title: 'PostgreSQL',
    icon: faDatabase,
    url: 'https://www.postgresql.org/',
  },
  
];

export const extras = [
  {
    title: 'Axios',
    url: 'https://axios-http.com/docs/intro',
  },
  {
    title: 'Express JS', 
    url: 'http://expressjs.com/',
  },
  {
    title: 'Mongoose',
    url: 'https://mongoosejs.com/',
  },
  {
    title: 'GSAP',
    url: 'https://greensock.com/gsap/',
  },
  {
    title: 'JWT',
    url: 'https://jwt.io/',
  },
  {
    title: 'Heroku',
    url: 'https://id.heroku.com/login',
  },
  {
    title: 'Figma',
    url: 'https://www.figma.com/files/recent?fuid=957085985568642901',
  },
];

export const aboutMe = {
  name: 'André Lizarán',
  description: `
  Hi, I'm Andre Lizaran and I'm frontend developer 
  (fullstack developer in process). I love making clean
  and useful apps/interfaces. My favorite programming 
  language is Typescript. I'm from Veracruz, Mexico.`,
};

export const contacts = [
  {
    title: 'Email',
    icon: faEnvelope,
    url: 'mailto:andrelizaran2000@gmail.com',
  },
  {
    title: 'Linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/',
  },
];

export const experiences = [
  {
    title: 'RayPal',
    description: 'React Native developer',
    technologies: [
      'Firebase',
      'React Native',
      'Expo',
      'React',
      'Tailwind CSS',
      'Next JS',
      'Axios',
    ],
    initialDate: 'November 2021',
    finishDate: 'Current',
    img: '',
  },
  {
    title: 'Medio Melón',
    description: 'Frontend developer',
    technologies: [
      'React',
      'React Query',
      'Angular JS',
      'JQuery',
      'Redux',
      'Material UI',
      'Bootstrap',
    ],
    initialDate: 'November 2021',
    finishDate: 'Current',
    img: '',
  },
  {
    title: 'Academio',
    description: 'Frontend developer',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    initialDate: 'February 2021',
    finishDate: 'November 2021',
    img: '',
  },
];

export const grades = [
  {
    title: 'Instituto Tecnológico de Veracruz',
    description: 'Computer System Enginnering',
    initialDate: 'August - 2018',
    finishDate: 'January - 2022',
  },
];

export const languages = ['Spanish (Native)', 'English (Advanced)'];

export const hobbies = [
  'Videogames',
  'Programming',
  'Hanging out with friends',
  'Music',
];

export const projects:Project[] = [
  {
    title: 'React Native Crypto',
    description:
      'React Crypto is an app that offers you information about the currency of some cryptocoins, its value compared to dollar, past value and its icon. You can create users to save your favorite coins.',
    images: [
      '/projects/react-crypto/img1.png',
      '/projects/react-crypto/img2.png',
      '/projects/react-crypto/img3.png',
      '/projects/react-crypto/img4.png',
      '/projects/react-crypto/img5.png',
      '/projects/react-crypto/img6.png',
    ],
    technologies: ['React Native', 'Typescript', 'Firebase', 'Axios'],
    icon: faBitcoin,
    links: {
      repository: 'https://github.com/Vulni/React-Crypto',
    },
  },
  {
    title: 'CIS Dashboard',
    description:
      'Application to manage the information displayed on the Systems Engineers Community platform',
    images: [''],
    technologies: [
      'React',
      'Typescript',
      'Tailwind CSS',
      'Axios',
      'React Query',
      'GSAP',
    ],
    icon: faWindowMaximize,
    links: {
      repository: 'https://github.com/Vulni/Pandemia-Tips-Frontend',
    },
  },
  {
    title: 'CIS Mobile',
    description:
      'Mobile application to consult the information provided by the Systems Engineers Community',
    images: [
      '/projects/cis-mobile/img-1.png',
      '/projects/cis-mobile/img-2.png',
      '/projects/cis-mobile/img-3.png',
      '/projects/cis-mobile/img-4.png',
      '/projects/cis-mobile/img-5.png',
      '/projects/cis-mobile/img-6.png',
    ],
    technologies: ['React Native', 'Typescript', 'Axios', 'React Query'],
    icon: faMobileAlt,
    links: {
      repository: 'https://github.com/AndreLizaran/Cis-Mobile',
    },
  },
  {
    title:'CIS Frontend',
    description:'Web application to consult the information provided by the Systems Engineers Community',
    images: [],
    technologies: ['React', 'Next JS', 'Tailwind CSS', 'React Query'],
    icon: faUsers,
    links: {
      repository: 'https://github.com/AndreLizaran/Cis-Frontend'
    }
  },
  {
    title:'React Colors',
    description:'Mobile app to get colors and make color palettes',
    images: [],
    technologies: ['React', 'React Native', 'React Query', 'Axios'],
    icon: faUsers,
    links: {
      repository: 'https://github.com/AndreLizaran/Cis-Frontend'
    }
  }
];

type Project = {
  title:string;
  description:string;
  images:string[];
  technologies:string[];
  icon:IconDefinition;
  links: {
    repository:string;
    repositoryB?:string;
  }
}