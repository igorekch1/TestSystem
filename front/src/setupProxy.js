const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/login', { target: 'http://localhost:5000/' }));
};