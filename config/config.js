var config = {};

config.dbhost = process.env.DBHOST || 'mongodb://mongo:27017/todo-react';
config.port = process.env.PORT || '5000';
config.host = process.env.HOST || 'http://localhost';
//process.env.NODE_ENV = 'development';

module.exports = config;
