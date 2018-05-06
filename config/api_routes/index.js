const apiRoutes = require('./api_routes');

if (process.env.NODE_ENV == 'production')

module.exports = function(app, db) {
  apiRoutes(app,db);

}
