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
    name: 'My EPL News',
    description:
      'Full stack application that uses a third party API to fetch and store articles about current English Premier League teams. Designed and built front end application with React Hooks to integrate with Node.js server. Designed and built database and server to store and manage application users and data. The REST API is also wrapped in a GraphQL server using Apollo Graphql middleware which exposes the public articles endpoints to GraphQL queries. Includes user registration and authentication system, as well as fully independent news views for desktop and mobile using react-responsive.',
    skills: ['React', 'React Hooks', 'NodeJS', 'PostgreSQL', 'GraphQL'],
    links: [
      { name: 'Live App', url: 'https://my-epl-news.vercel.app/' },
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/my-epl-news-client',
      },
      {
        name: 'Server Github',
        url: 'https://github.com/jakeelizondo/my-epl-news-api',
      },
    ],
  },

  {
    id: 3,
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
    id: 4,
    name: 'Spanish Your Way',
    description:
      'Full stack application that uses the concept of spaced repetition to allow a user to practice spanish vocabulary words. Designed and built front end application with React to integrate with Node.js server. Designed and built database and server to store and manage application users and data. Includes user registration and authentication system.',
    skills: ['React', 'NodeJS', 'PostgreSQL'],
    links: [
      {
        name: 'Live App',
        url: 'https://jake-spaced-repetition.vercel.app/register',
      },
      {
        name: 'Client Github',
        url: 'https://github.com/jakeelizondo/spaced-repetition',
      },
      {
        name: 'Server Github',
        url: 'https://github.com/jakeelizondo/spaced-repetition-api',
      },
    ],
  },
];

module.exports = PROJECTS;
