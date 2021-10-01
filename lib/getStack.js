const devABC = {
  a: {
    title: 'Angular',
    icon: 'DiAngularSimple',
  },
  b: {
    title: 'Bootstrap',
    icon: 'DiBootstrap',
  },
  c: {
    title: 'Coffeescript',
    icon: 'DiCoffeescript',
  },
  d: {
    title: 'Docker',
    icon: 'DiDocker',
  },
  e: {
    title: 'Ember',
    icon: 'DiEmber',
  },
  f: {
    title: 'Firebase',
    icon: 'DiFirebase',
  },
  g: {
    title: 'Go',
    icon: 'DiGo',
  },
  h: {
    title: 'Haskell',
    icon: 'DiHaskell',
  },
  i: {
    title: 'IE',
    icon: 'DiIe',
  },
  j: {
    title: 'JavaScript',
    icon: 'DiJavascript1',
  },
  k: {
    title: 'Kraken.js',
    icon: 'DiKrakenjs',
  },
  l: {
    title: 'Less',
    icon: 'DiLess',
  },
  m: {
    title: 'MongoDB',
    icon: 'DiMongodb',
  },
  n: {
    title: 'Node.js',
    icon: 'DiNodejsSmall',
  },
  o: {
    title: 'Openshift',
    icon: 'DiOpenshift',
  },
  p: {
    title: 'PHP',
    icon: 'DiPhp',
  },
  q: {
    title: 'MySQL',
    icon: 'DiMysql',
  },
  r: {
    title: 'React',
    icon: 'DiReact',
  },
  s: {
    title: 'Sqlite',
    icon: 'DiSqllite',
  },
  t: {
    title: 'Terminal',
    icon: 'DiTerminalBadge',
  },
  u: {
    title: 'Unity',
    icon: 'DiUnitySmall',
  },
  v: {
    title: 'Visual Studio',
    icon: 'DiVisualstudio',
  },
  w: {
    title: 'WordPress',
    icon: 'DiWordpress',
  },
  x: {
    title: 'NGINX',
    icon: 'DiNginx',
  },
  y: {
    title: 'Yeoman',
    icon: 'DiYeoman',
  },
  z: {
    title: 'Zend',
    icon: 'DiZend',
  },
};

export default async function getStack(name) {
  name = name.toLowerCase().replace(/[^a-z]/gi, '');
  const nameSet = new Set(name);
  const output = [...nameSet].map((abc) => devABC[abc]).filter(Boolean);
  return output;
}
