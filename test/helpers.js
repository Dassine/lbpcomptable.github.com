const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Services Comptables LBP',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Services Comptables LBP',
    heading: 'ABOUT ME',
  },
  // {
  //   route: '/projects',
  //   title: 'Projects | Services Comptables LBP',
  //   heading: 'PROJECTS'
  // },
  {
    route: '/contact',
    title: 'Contact | Services Comptables LBP',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
