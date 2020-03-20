const connection

connect = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASS,
    "database": "collabhub",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}

module.exports = connection