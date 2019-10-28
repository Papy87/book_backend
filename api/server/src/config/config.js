// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }

require('dotenv').config();


module.exports = {

    // If using onine database
    // development: {
    //   use_env_variable: 'DATABASE_URL'
    // },

    development: {
        database: 'books',
        username: 'postgres',
        password: 312205,
        host: '127.0.0.1',
        dialect: 'postgres'
    },

    test: {
        database: 'book_test',
        username: 'postgres',
        password: 312205,
        host: '127.0.0.1',
        dialect: 'postgres'
    },

    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
};