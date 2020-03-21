require("dotenv").config();

module.exports = {

  "development": {
    "username": "root",
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
    "username": "hisagsmr72y7hj4x",
    "password": "xruefif8efie761r",
    "database": "xbes0304mhxq32e4",
    "host": "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
}

