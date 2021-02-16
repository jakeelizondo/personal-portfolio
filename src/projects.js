const PROJECTS = [
  {
    id: 1,
    name: 'Gift Closet',
    description:
      'Full stack application for creating, updating, and tagging gift ideas throughout the year. Designed and built front end application with React to integrate with Node.js server. Designed and built database and server to store and manage application users and data. Includes user registration and authentication system.',
    skills: ['React', 'NodeJS', 'PostgreSQL'],
    links: [
      { name: 'Live App', url: 'https://gift-closet.vercel.app/' },
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/gift-closet-client',
      },
      {
        name: 'Server Github',
        url: 'https://github.com/jakeelizondo/gift-closet-api',
      },
    ],
  },
  {
    id: 2,
    name: 'The Item Vault',
    description:
      'This application will be growing over time to become a place where people can store items and campaign information for their Dungeons & Dragons campaigns. For now, it is a simple item generator to give dungeon masters ideas about items to include. The items in the generator are contributed by fellow players.',
    skills: ['React', 'HTML5', 'CSS3'],
    links: [
      { name: 'Live App', url: 'https://the-item-vault.vercel.app/' },
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/the-item-vault',
      },
    ],
  },
  {
    id: 3,
    name: 'Quiz App',
    description:
      'This simple online quiz was built to practice utilizing the JQuery library, as well as maintaining data inside of local state in an application and displaying changes in that state to the user.',
    skills: ['JQuery', 'HTML5', 'CSS3'],
    links: [
      { name: 'Live App', url: 'https://jakeelizondo.github.io/quiz-app/' },
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/quiz-app/',
      },
    ],
  },
];

module.exports = PROJECTS;
