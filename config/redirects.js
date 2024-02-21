export default {
  '/home': { redirect: { to: '/', statusCode: 301 } },
  '/destinations': {
    redirect: { to: '/destinations/moon', statusCode: 301 },
  },
  '/crew': { redirect: { to: '/crew/douglas-hurley', statusCode: 301 } },
  '/technology': {
    redirect: { to: '/technology/launch-vehicle', statusCode: 301 },
  },
};

// module.exports = routeRules;
