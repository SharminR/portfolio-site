import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sharmin',
  subtitle: 'I am a Graphic Designer turned Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a graphic designer turned software developer. I am eager to apply programming and development knowledge acquired from the software development vocational training into practicality.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'site_2.png',
    title: 'HeroHand',
    info:
      'This is a website that uses React/Redux as front-end, Express for server side rendering of the React application, Node.js for the development tooling and running the Express server. Me with the senior developer mostly worked with changing functionality of the components.',
    info2: '',
    url: 'https://herohand.pl/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'site_1.png',
    title: 'Helsinki XR Center',
    info:
      'This is a wordpress website made from scratch from designing to implementing with a team of 4. As a trainee, I have worked with the lead developer to make almost all the contents in front-end based on the designer preferences.',
    info2: '',
    url: 'https://helsinkixrcenter.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'site_3.png',
    title: 'Nitomani School Oy',
    info:
      "This was the first website that I designed by myself with Wix! Used HTML, CSS and Wix's database to implement functionality.",
    info2: '',
    url: 'https://nitomanischool.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-form-img.png',
    title: 'Simple Form',
    info:
      'Personal project made with create-react-app. A simple login form that checks the validity of input data and shows a success page if everything is correct!',
    info2: '',
    url: 'https://sharminr.github.io/react-form/',
    repo: 'https://github.com/SharminR/react-form', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.png',
    title: 'Movie Rental Service',
    info:
      "As the title suggests, this project let's you rent a movie! You can filter by genre, sort by order, like or delete movies from the list and save movies to rent. User needs to register to access the saved movies. Works similar to e-commerce site.",
    info2: '',
    url: 'https://movie-rental-service.netlify.app/movies',
    repo: 'https://github.com/SharminR/movie-rental-service', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.png',
    title: 'Speed typing',
    info:
      'Try to keep up with the timer and type as fast as possible! Fun game made with vanilla JS.',
    info2: '',
    url: 'https://sharminr.github.io/speed-typing-game/',
    repo: 'https://github.com/SharminR/speed-typing-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_4.png',
    title: 'Card Game',
    info:
      'In each round, whoever has the highest number of cards wins and gets to keep all those cards into their deck. Fun card game which was a school project.',
    info2: '',
    url: 'https://sharminr.github.io/card-game/',
    repo: 'https://github.com/SharminR/card-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_5.png',
    title: 'Todo App',
    info: 'Using Vue.js. Work in progress. COMING SOON!!',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'Would you like to work with me? Awesome! Please check out more of my projects in the github link below!',
  btn: 'https://github.com/SharminR',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sharmin-rahman/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AuroDeNeko',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://gitlab.com/sharmin.rahman',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
