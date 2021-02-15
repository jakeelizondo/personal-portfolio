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
];

module.exports = PROJECTS;
