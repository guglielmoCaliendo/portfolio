import foodapp from './foodapp.webp';
import cointracker from './cointraker.webp';
import htmllogo from './file_type_html_icon_130541.webp';
import csslogo from './file_type_css_icon_130661.webp';
import javascriptlogo from './javascript_original_logo_icon_146455.webp';
import reactlogo from './react_original_logo_icon_146374.webp';
import reduxlogo from './redux_original_logo_icon_146365.webp';
import nodelogo from './nodejs_original_wordmark_logo_icon_146412.webp';
import expresslogo from './icons8-express-js-500.png';
import mongodblogo from './mongodb_original_logo_icon_146424.png';
import postgreslogo from './postgresql_original_logo_icon_146391.png';
import typescriptlogo from './typescript_original_logo_icon_146317.webp';

type Project = {
  id: number;
  name: string;
  image: string;
  description: {
    EN: string;
    ES: string;
  };
  technologies: string[];
  url: string;
};

type Skills = {
  id: number;
  name: string;
  image: string;
  percentage: number;
};

type BioEvent = {
  id: number;
  date: number | string;
  description: {
    EN: string;
    ES: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Henry Food App',
    image: `${foodapp}`,
    description: {
      EN: 'An Individual project carried out in my course at Henry Boot camp, it is a fully responsive application, focused on recipes.',
      ES: 'Un proyecto individual llevado a cabo en mi curso en Henry Boot camp, es una aplicación totalmente responsive, centrada en recetas.',
    },
    technologies: [
      'HTML5',
      'CSS',
      'Javascript',
      'React',
      'Redux',
      'NodeJS',
      'PostgreSQL',
      'Sequelize',
    ],
    url: 'https://food-front-tau.vercel.app/',
  },
  {
    id: 2,
    name: 'CoinTracker',
    image: `${cointracker}`,
    technologies: [
      'HTML5',
      'CSS',
      'Typescript',
      'React',
      'Redux',
      'NodeJS',
      'MongoDB',
      'Mongoose',
    ],
    description: {
      EN: 'CoinTracker is cryptocurrencies tracker, it mainly makes it easier to keep track of your assets, you can access graphs to find out about your earnings as well as to know the current status of each particular cryptocurrency.',
      ES: 'CoinTracker es un rastreador de criptomonedas, principalmente facilita el seguimiento de sus activos, puede acceder a gráficos para conocer sus ganancias y conocer el estado actual de cada criptomoneda en particular.',
    },
    url: 'https://pf-03-cointracker.vercel.app/',
  },
];

export const skills: Skills[] = [
  {
    id: 1,
    name: 'HTML',
    image: `${htmllogo}`,
    percentage: 70,
  },
  {
    id: 2,
    name: 'CSS',
    image: `${csslogo}`,
    percentage: 70,
  },
  {
    id: 3,
    name: 'JavaScript',
    image: `${javascriptlogo}`,
    percentage: 80,
  },
  {
    id: 4,
    name: 'React',
    image: `${reactlogo}`,
    percentage: 70,
  },
  {
    id: 5,
    name: 'Redux',
    image: `${reduxlogo}`,
    percentage: 60,
  },
  {
    id: 6,
    name: 'NodeJS',
    image: `${nodelogo}`,
    percentage: 60,
  },
  {
    id: 7,
    name: 'ExpressJS',
    image: `${expresslogo}`,
    percentage: 60,
  },
  {
    id: 8,
    name: 'MongoDB',
    image: `${mongodblogo}`,
    percentage: 50,
  },
  {
    id: 9,
    name: 'PostgreSQL',
    image: `${postgreslogo}`,
    percentage: 50,
  },
  {
    id: 10,
    name: 'TypeScript',
    image: `${typescriptlogo}`,
    percentage: 40,
  },
];

export const events: BioEvent[] = [
  {
    id: 1,
    date: 2009,
    description: {
      EN: 'I finish my high school activities graduating with a Bachelor of Science.',
      ES: 'Termino mis actividades de bachillerato graduándome como Bachiller en Ciencias.',
    },
  },
  {
    id: 2,
    date: 2012,
    description: {
      EN: 'I start studying cooking to become a great chef.',
      ES: 'Empiezo a estudiar cocina para convertirme en un gran chef.',
    },
  },
  {
    id: 3,
    date: 2019,
    description: {
      EN: 'I realize that something is missing in my life, something that I always liked but never dared to explore, perhaps a world that I always loved but feared at the same time.',
      ES: 'Me doy cuenta de que falta algo en mi vida, algo que siempre me gustó pero nunca me atreví a explorar, tal vez un mundo que siempre amé pero temí al mismo tiempo.',
    },
  },
  {
    id: 4,
    date: 2020,
    description: {
      EN: 'I start reading about technology, that world that I always loved but feared because I thought it was a world only for geniuses. but I realize that it is not a world for geniuses but for dedicated people who want to contribute their grain of sand to the world to make the world evolve, and I immediately fell more in love with this world.',
      ES: 'Empiezo a leer sobre tecnología, ese mundo que siempre amé pero temía porque pensaba que era un mundo solo para genios. pero me doy cuenta que no es un mundo para genios sino para personas dedicadas que quieren aportar su granito de arena al mundo para hacer que el mundo evolucione, y de inmediato me enamoré más de este mundo.',
    },
  },
  {
    id: 5,
    date: 2022,
    description: {
      EN: 'I finish my studies in a programming boot camp called SoyHenry where I learn how to program so I can join this world that I love so much graduating as a Full Stack Developer (P/MERN).',
      ES: 'Termino mis estudios en un boot camp de programación llamado SoyHenry donde aprendo a programar para poder unirme a este mundo que tanto amo graduándome como Full Stack Developer (P/MERN).',
    },
  },
  {
    id: 6,
    date: 'Now',
    description: {
      EN: 'I Keep learning to gain more knowledge and add more value with my skills.',
      ES: 'Sigo aprendiendo para ganar más conocimiento y agregar más valor con mis habilidades.',
    },
  },
];
