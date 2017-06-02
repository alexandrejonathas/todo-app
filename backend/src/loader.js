const server = require('./config/server.js')
require('./config/routes')(server)
require('./config/database.js')
