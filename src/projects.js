const PROJECTS = [
  {
    id: 1,
    name: 'Gift Closet',
    description:
      'Full stack application for creating, updating, and tagging gift ideas throughout the year. Designed and built front end application with React to integrate with Node.js server. Designed and built database and server to store and manage application users and data. Includes user registration and authentication system.',
    skills: ['React', 'NodeJS', 'PostgreSQL'],
    links: [
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/gift-closet-client',
      },
      {
        name: 'Server Github',
        url: 'https://github.com/jakeelizondo/gift-closet-api',
      },
      { name: 'Live App', url: 'https://gift-closet.vercel.app/' },
    ],
  },
  {
    id: 2,
    name: 'The Item Vault',
    description:
      'This application will be growing over time to become a place where people can store items and campaign information for their Dungeons & Dragons campaigns. For now, it is a simple item generator to give dungeon masters ideas about items to include. The items in the generator are contributed by fellow players.',
    skills: ['React', 'HTML5', 'CSS3'],
    links: [
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/the-item-vault',
      },
      { name: 'Live App', url: 'https://the-item-vault.vercel.app/' },
    ],
  },
];

module.exports = PROJECTS;
